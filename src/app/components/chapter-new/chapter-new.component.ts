import { Component, OnInit } from '@angular/core';
import { Chapter } from 'src/app/models/chapter';
import { environment } from 'src/environments/environment';
import { ChapterService } from 'src/app/services/chapter.service';
import { Router, ActivatedRoute } from '@angular/router';
declare var swal: any;

@Component({
  selector: 'app-chapter-new',
  templateUrl: './chapter-new.component.html',
  styleUrls: ['./chapter-new.component.css'],
  providers: [ChapterService]
})
export class ChapterNewComponent implements OnInit {

  public subheaderTitle: String;
  public submitValue: String;
  public chapter: Chapter;
  public resolutions: String[];
  public codecs: String[];

  constructor(
    private _chapterService: ChapterService,
    private _router: Router,
    private _route: ActivatedRoute
  ){

    this.subheaderTitle = 'CREAR CAPÍTULO';
    this.submitValue = 'Crear';
    this.chapter = new Chapter('', '', '', '', 0, '');
    this.resolutions = environment.resolutions;
    this.codecs = environment.codecs;

  }

  ngOnInit(): void{
  }

  onSubmit(){

      this._route.params.subscribe(params=>{

        let serieId = params['idSerie'];
        let seasonId = params['idSeason'];

        this._chapterService.create(seasonId, this.chapter).subscribe(
          response=>{

            if(response.status=='success'){

              this.chapter = response.chapter;

              // ALERTA

              swal(
                '¡¡¡Capítulo creado!!!',
                'El capítulo se ha creado correctamente',
                'success'
              );

              this._router.navigate(['/serie', serieId]);

            }

          },

          error=>{

            console.log(error);

          }

        );

      });

  }


}
