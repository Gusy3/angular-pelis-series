import { Component, OnInit } from '@angular/core';
import { Season } from 'src/app/models/season';
import { SeasonService } from 'src/app/services/season.service';
import { Router, ActivatedRoute } from '@angular/router';
declare var swal: any;

@Component({
  selector: 'app-season-edit',
  templateUrl: '../season-new/season-new.component.html',
  styleUrls: ['./season-edit.component.css'],
  providers: [SeasonService]
})
export class SeasonEditComponent implements OnInit {

  public subheaderTitle: String;
  public submitValue: String;
  public season: Season;

  constructor(
    private _seasonService: SeasonService,
    private _router: Router,
    private _route: ActivatedRoute
  ){

    this.subheaderTitle = 'EDITAR TEMPORADA';
    this.submitValue = 'Editar';
    this.season = new Season('', '', '', '');

  }

  ngOnInit(): void{

    this.getSeason();

  }

  getSeason(){

    this._route.params.subscribe(params=>{

      let id = params['idSeason'];

      this._seasonService.getSeason(id).subscribe(
        
        response=>{

          if(response.season){

            this.season = response.season;

          }
          else{

            this._router.navigate(['/series']);

          }

        },
        error=>{

          console.log(error);
          this._router.navigate(['/series']);

        }
      );

    });

  }

  onSubmit(){

      this._seasonService.update(this.season._id, this.season).subscribe(
        response=>{

          if(response.status=='success'){

            this.season = response.season;

            // ALERTA

            swal(
              '¡¡¡Temporada editada!!!',
              'La temporada se ha editado correctamente',
              'success'
            );

            this._router.navigate(['/serie', this.season.id_serie]);

          }

        },

        error=>{

          console.log(error);

        }

      );

  }

}
