import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/models/film';
import { FilmService } from 'src/app/services/film.service';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
declare var swal: any;

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css'],
  providers: [FilmService]
})
export class FilmComponent implements OnInit{

  public film: Film;
  public apiUrl: string;
  public genders: string;

  constructor(
    private _filmService: FilmService,
    private _route: ActivatedRoute,
    private _router: Router
  ){
    this.film = new Film('', '', '', '', 0, '', '', 0, '', '', '', new Date());
    this.apiUrl = environment.apiUrl;
    this.genders = '';
  }

  ngOnInit(): void{

    this._route.params.subscribe(params=>{

      let id = params['id'];

      this._filmService.getFilm(id).subscribe(
        
        response=>{

          if(response.film){

            this.film = response.film;
            this.getFilmGenders(this.film.gender);

          }
          else{

            this._router.navigate(['/home']);

          }

        },
        error=>{

          console.log(error);
          this._router.navigate(['/home']);

        }
      );

    });

  }

  getFilmGenders(genders: String){

    for (let i = 0; i<genders.length; i++){

      if(i == genders.length - 1){

        this.genders += genders[i];

      }else{

        this.genders += genders[i]+", ";

      }

    }

  }

  delete(idFilm: String){

    swal({
      title: "¿Estás seguro?",
      text: "¡Una vez borrado no podrás recuperarlo!",
      icon: "warning",
      buttons: [true, true],
      dangerMode: true
    })
    .then((willDelete: any)=>{
      if (willDelete){

        this._filmService.delete(idFilm).subscribe(

          response=>{

            if(response.film){

              swal("¡La película ha sido borrada correctamente!", {
                icon: "success",
              });
              this._router.navigate(['/peliculas']);

            }

          },

          error=>{

            console.log(error);
            this._router.navigate(['/peliculas']);

          }
          
        );

      }else{

        swal("¡Tranquilo nada se ha borrado!");

      }

    });


  }

}
