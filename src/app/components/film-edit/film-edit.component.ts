import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/models/film';
import { environment } from 'src/environments/environment';
import { FilmService } from 'src/app/services/film.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-film-edit',
  templateUrl: '../film-new/film-new.component.html',
  styleUrls: ['./film-edit.component.css'],
  providers: [FilmService]
})
export class FilmEditComponent implements OnInit{

  public subheaderTitle: String;
  public submitValue: String;
  public film: Film;
  public versions: String[];
  public genders: String[];
  public resolutions: String[];
  public codecs: String[];
  public vieweds: String[];

  constructor(
    private _filmService: FilmService,
    private _router: Router,
    private _route: ActivatedRoute
  ){
    
    this.subheaderTitle = 'EDITAR PELÍCULA';
    this.submitValue = 'Editar';
    this.film = new Film('', '', '', '', 0, '', '', 0, '', '', '', new Date());
    this.versions = environment.versions;
    this.genders = environment.genders;
    this.resolutions = environment.resolutions;
    this.codecs = environment.codecs;
    this.vieweds = environment.viewed;

  }

  ngOnInit(): void{

    this.getFilm();

  }

  
  getFilm(){

    this._route.params.subscribe(params=>{

      let id = params['id'];

      this._filmService.getFilm(id).subscribe(
        
        response=>{

          if(response.film){

            this.film = response.film;

          }
          else{

            this._router.navigate(['/peliculas']);

          }

        },
        error=>{

          console.log(error);
          this._router.navigate(['/peliculas']);

        }
      );

    });


  }

  onSubmit(){

    console.log(this.film);

    this._filmService.update(this.film._id, this.film).subscribe(
      response=>{

        if(response){

          this.film = response.film;

          // ALERTA

          swal(
            '¡¡¡Película editada!!!',
            'La película se ha editado correctamente',
            'success'
          );

          this._router.navigate(['/peliculas']);

        }

      },

      error=>{

        console.log(error);

      }

    );

  }


}
