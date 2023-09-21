import { Component, OnInit } from '@angular/core';
import { Chapter } from 'src/app/models/chapter';
import { environment } from 'src/environments/environment';
import { ChapterService } from 'src/app/services/chapter.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-chapter-edit',
  templateUrl: '../chapter-new/chapter-new.component.html',
  styleUrls: ['./chapter-edit.component.css'],
  providers: [ChapterService]
})
export class ChapterEditComponent implements OnInit {

  public subheaderTitle: String;
  public submitValue: String;
  public chapter: Chapter;
  public resolutions: String[];
  public codecs: String[];
  private id_serie: String;

  constructor(
    private _chapterService: ChapterService,
    private _router: Router,
    private _route: ActivatedRoute
  ){

    this.subheaderTitle = 'EDITAR CAPÍTULO';
    this.submitValue = 'Editar';
    this.chapter = new Chapter('', '', '', '', 0, '');
    this.resolutions = environment.resolutions;
    this.codecs = environment.codecs;
    this.id_serie = '';

  }

  ngOnInit(): void{

    this.getChapter();

  }

  getChapter(){

    this._route.params.subscribe(params=>{

      this.id_serie = params['idSerie']
      let id_chapter = params['idChapter'];

      this._chapterService.getChapter(id_chapter).subscribe(
        
        response=>{

          if(response.chapter){

            this.chapter = response.chapter;

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

    });

  }

  onSubmit(){

      this._chapterService.update(this.chapter._id, this.chapter).subscribe(
        response=>{

          if(response.status=='success'){

            this.chapter = response.chapter;

            // ALERTA

            swal(
              '¡¡¡Capítulo editado!!!',
              'El capítulo se ha editado correctamente',
              'success'
            );

            this._router.navigate(['/serie', this.id_serie]);

          }

        },

        error=>{

          console.log(error);

        }

      );

  }

}
