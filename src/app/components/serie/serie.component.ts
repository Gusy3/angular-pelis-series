import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/models/serie';
import { Chapter } from 'src/app/models/chapter';
import { SerieService } from 'src/app/services/serie.service';
import { SeasonService } from 'src/app/services/season.service';
import { ChapterService } from 'src/app/services/chapter.service';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
declare var swal: any;

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css'],
  providers: [SerieService, SeasonService, ChapterService]
})
export class SerieComponent implements OnInit{

  public serie: any;
  public chapter: Chapter[];
  public apiUrl: string;
  public genders: string;
  public totalSeasons: Number;
  public totalChapters: Number[];
  public seasonSize: Number[];
  public serieSize: number;
  public accordionActive: any;

  constructor(
    private _serieService: SerieService,
    private _seasonService: SeasonService,
    private _chapterService: ChapterService,
    private _route: ActivatedRoute,
    private _router: Router,
  ){
    this.serie = new Serie('', '', '', 0, '', '', '', new Date());
    this.chapter = [];
    this.apiUrl = environment.apiUrl;
    this.genders = '';
    this.totalSeasons = 0;
    this.totalChapters = [];
    this.seasonSize = [];
    this.serieSize = 0;
    this.accordionActive = null;
  }

  ngOnInit(): void{

    this._route.params.subscribe(params=>{

      let idSerie = params['id'];

      this.getSerie(idSerie);

    });

  }

  getSerie(id: String){

    this._serieService.getSerie(id).subscribe(
        
        response=>{

          if(response.serie){

            this.serie = response.serie;
            this.getSerieGenders(this.serie.gender);
            this.getSeasons(this.serie._id);

          }
          else{

            this._router.navigate(['/series']);

          }

        },
        error=>{

          console.log(error);
          this._router.navigate(['/series']);

        }
      );

  }

  getSeasons(id: String){

    this._seasonService.getSeasons(id).subscribe(
        
        response=>{

          if(response.seasons){

            this.serie.seasons = response.seasons;
            this.totalSeasons = response.seasons.length;

            for(let index = 0; index<this.serie.seasons.length; index++){

              this.getChapters(this.serie.seasons[index]._id, index);

            }

          }
          else{

            this._router.navigate(['/series']);

          }

        },
        error=>{

          console.log(error);
          this._router.navigate(['/series']);

        }
      );

  }

  getChapters(idSeason: String, index: number){

    this.serieSize = 0;

    this._serieService.getChapters(idSeason).subscribe(
        
        response=>{

          if(response.chapters){

            this.serie.seasons[index].chapters = response.chapters;
            this.totalChapters[index] = response.chapters.length;
            this.seasonSize[index] = parseFloat(this.addSize(response.chapters).toFixed(2));
            this.serieSize = parseFloat((this.serieSize + this.addSize(response.chapters)).toFixed(2));

          }
          else{

            this._router.navigate(['/series']);

          }

        },
        error=>{

          console.log(error);
          this._router.navigate(['/series']);

        }
      );

  }

  getSerieGenders(genders: String){

    for (let i = 0; i<genders.length; i++){

      if(i == genders.length - 1){

        this.genders += genders[i];

      }else{

        this.genders += genders[i]+", ";

      }

    }

  }

  addSize(array: any){

    let size = 0;

    for (let i = 0; i<array.length; i++){

        size += array[i].size;

    }

    return size;

  }

  deleteSerie(idSerie: String){

    swal({
      title: "¿Quieres borrar la serie?",
      text: "¡Una vez borrado no podrás recuperarlo!",
      icon: "warning",
      buttons: [true, true],
      dangerMode: true
    })
    .then((willDelete: any)=>{
      if (willDelete){

        this._serieService.delete(idSerie).subscribe(

          response=>{

            if(response.serie){

              swal("¡La serie ha sido borrada correctamente!", {
                icon: "success",
              });
              this._router.navigate(['/series']);

            }

          },

          error=>{

            console.log(error);
            this._router.navigate(['/series']);

          }
          
        );

      }else{

        swal("¡Tranquilo nada se ha borrado!");

      }

    });


  }

  deleteSeason(idSeason: String){

    swal({
      title: "¿Quieres borrar la temporada?",
      text: "¡Una vez borrado no podrás recuperarlo!",
      icon: "warning",
      buttons: [true, true],
      dangerMode: true
    })
    .then((willDelete: any)=>{
      if (willDelete){

        this._seasonService.delete(idSeason).subscribe(

          response=>{

            if(response.season){

              swal("¡La temporada ha sido borrada correctamente!", {
                icon: "success",
              });

              this.getSeasons(this.serie._id);

            }

          },

          error=>{

            console.log(error);
            this._router.navigate(['/series']);

          }
          
        );

      }else{

        swal("¡Tranquilo nada se ha borrado!");

      }

    });

  }

  deleteChapter(idChapter: String){

    swal({
      title: "¿Quieres borrar el capítulo?",
      text: "¡Una vez borrado no podrás recuperarlo!",
      icon: "warning",
      buttons: [true, true],
      dangerMode: true
    })
    .then((willDelete: any)=>{
      if (willDelete){

        this._chapterService.delete(idChapter).subscribe(

          response=>{

            if(response.chapter){

              swal("¡El capítulo ha sido borrado correctamente!", {
                icon: "success",
              });

              this.getSeasons(this.serie._id);

            }

          },

          error=>{

            console.log(error);
            this._router.navigate(['/series']);

          }
          
        );

      }else{

        swal("¡Tranquilo nada se ha borrado!");

      }

    });

  }

  toggle(index: number){

    if(this.accordionActive === index){

      return this.accordionActive = null;

    }

    return this.accordionActive = index;

}

}
