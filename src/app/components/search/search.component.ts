import { Component, OnInit} from '@angular/core';
import { Film } from 'src/app/models/film';
import { FilmService } from 'src/app/services/film.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [FilmService]
})
export class SearchComponent implements OnInit{

  public films: Film[];

  constructor(
    private _filmService: FilmService,
    private _route: ActivatedRoute
  ){
    this.films = [];
  }

  ngOnInit(): void{

    this._route.params.subscribe(params=>{

      let title = params['title'];

      this._filmService.search(title).subscribe(

        response=>{

          if(response.films){

            this.films = response.films;

          }else{

            this.films = [];

          }

        },
        error=>{

          console.log(error);
          this.films = [];

        }
      );

    })

  }

}
