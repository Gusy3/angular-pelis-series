import { Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import { Film } from 'src/app/models/film';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css'],
  providers: [FilmService]
})
export class FilmsComponent implements OnInit, OnChanges{

  public page: number = 1;
  public itemsPerPage: number = 20;
  @Input() public films: Film[];
  private change: boolean;

  constructor(
    private _filmService: FilmService
  ){
    this.films = [];
    this.change = false;
  }

  ngOnChanges(changes: SimpleChanges): void{

    if(!changes.films.firstChange){

      this.page = 1;

    }else{

      this.change = true;

    }

  }

  ngOnInit(): void{

    if(!this.change){

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

}
