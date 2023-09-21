import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/models/serie';  
import { SerieService } from 'src/app/services/serie.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css'],
  providers: [SerieService]
})
export class SeriesComponent implements OnInit{

  public page: number = 1;
  public itemsPerPage: number = 20;
  public series: Serie[];
  private change: boolean;

  constructor(
    private _serieService: SerieService
  ){
    this.series = [];
    this.change = false;
  }
/*
  ngOnChanges(changes: SimpleChanges): void{

    if(!changes.films.firstChange){

      this.page = 1;

    }else{

      this.change = true;

    }

  }
*/
  ngOnInit(): void{

    if(!this.change){

      this._serieService.getSeries().subscribe(

        response=>{

          if(response.status=="success"){

            this.series = response.series;

          }

        },

        error=>{

          console.log(error);

        }

      );

    }

  }

}
