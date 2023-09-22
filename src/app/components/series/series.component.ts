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
  public loading: boolean;

  constructor(
    private _serieService: SerieService
  ){
    this.series = [];
    this.loading = true;
  }
  
  ngOnInit(): void{

      this._serieService.getSeries().subscribe(

        response=>{

          if(response.status=="success"){

            this.series = response.series;
            this.loading = false;

          }

        },

        error=>{

          console.log(error);

        }

      );

  }

}
