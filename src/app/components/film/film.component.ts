import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/models/film';
import { FilmService } from 'src/app/services/film.service';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import swal from 'sweetalert';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css'],
  providers: [FilmService]
})
export class FilmComponent implements OnInit{

  public film: Film;
  public apiUrl: string;

  constructor(
    private _filmService: FilmService,
    private _route: ActivatedRoute,
    private _router: Router
  ){
    this.film = new Film('', '', '', '', 0, '', '', 0, '', '', '', new Date());
    this.apiUrl = environment.apiUrl;
  }

  ngOnInit(): void{

    this._route.params.subscribe(params=>{

      let id = params['id'];

      this._filmService.getFilm(id).subscribe(
        
        response=>{

          if(response.film){

            this.film = response.film;

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

  delete(idFilm: String){

    swal({
      title: "¿Estás seguro?",
      text: "¡Una vez borrado no podrás recuperarlo!",
      icon: "warning",
      buttons: [true, true],
      dangerMode: true
    })
    .then((willDelete)=>{
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
