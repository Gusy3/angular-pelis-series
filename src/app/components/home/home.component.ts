import { Component, OnInit } from '@angular/core';
import { FilmSerieService } from 'src/app/services/film_serie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [FilmSerieService]
})
export class HomeComponent implements OnInit{

  public items: any;
  public page: number = 1;
  public itemsPerPage: number = 20;
  public loading: boolean;

  constructor(
    private _filmSerieService: FilmSerieService,
  ){

    this.items = [];
    this.loading = true;

  }

  ngOnInit(): void{

    this.getFilmsSeries();

  }

  getFilmsSeries(){

    this._filmSerieService.getFilmsSeries().subscribe(

      response=>{

        if(response.status=="success"){

          this.items = response.films_series;
          this.loading = false;

        }

      },

      error=>{

        console.log(error);

      }

    );

  }

}
