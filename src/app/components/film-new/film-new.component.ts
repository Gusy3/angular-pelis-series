import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/models/film';
import { environment } from 'src/environments/environment';
import { FilmService } from 'src/app/services/film.service';
import { Router } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-film-new',
  templateUrl: './film-new.component.html',
  styleUrls: ['./film-new.component.css'],
  providers: [FilmService]
})
export class FilmNewComponent implements OnInit{

  public subheaderTitle: String;
  public submitValue: String;
  public film: Film;
  public versions: String[];
  public genders: String[];
  public resolutions: String[];
  public codecs: String[];

  constructor(
    private _filmService: FilmService,
    private _router: Router,
  ){

    this.subheaderTitle = 'CREAR PELÍCULA';
    this.submitValue = 'Crear';
    this.film = new Film('', '', '', '', 0, '', '', 0, '', '', '', new Date());
    this.versions = environment.versions;
    this.genders = environment.genders;
    this.resolutions = environment.resolutions;
    this.codecs = environment.codecs;

  }

  ngOnInit(): void {
  }

  onSubmit(){

    this._filmService.create(this.film).subscribe(
      response=>{

        if(response.status=='success'){

          this.film = response.film;

          // ALERTA

          swal(
            '¡¡¡Película creada!!!',
            'La película se ha creado correctamente',
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
