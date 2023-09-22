import { Component, OnInit } from '@angular/core';
import { FilmSerieService } from 'src/app/services/film_serie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [FilmSerieService]
})
export class SearchComponent implements OnInit{

  public films_series: any;
  public search: String;
  public page: number = 1;
  public itemsPerPage: number = 20;
  public loading: boolean;

  constructor(
    private _filmSerieService: FilmSerieService,
    private _route: ActivatedRoute,
    private _router: Router
  ){
    this.films_series = [];
    this.search = "";
    this.loading = true;
    this._router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void{

      this._route.queryParams.subscribe(params=>{

        this.search = params.title;

        this._filmSerieService.search(params).subscribe(

          response=>{

            if(response.status=="success"){

              this.films_series = response.films_series;
              this.page = 1;
              this.loading = false;
  
            }else{

              this.films_series = [];

            }

          },
          error=>{

            console.log(error);
            this.films_series = [];

          }
        );

      });

  }

}
