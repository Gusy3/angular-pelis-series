import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/models/film';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css'],
  providers: [FilmService]
})
export class FilmsComponent implements OnInit{

  public page: number;
  public itemsPerPage: number;
  public films: Film[];

  constructor(
    private _filmService: FilmService
  ){
    this.page = 1;
    this.itemsPerPage = 20;
    this.films = [];
  }

  ngOnInit(): void{

      this._filmService.getFilms().subscribe(

        response=>{

          if(response.status=="success"){

            this.films = response.films;

          }

        },

        error=>{

          console.log(error);

        }

      );

  }

}
