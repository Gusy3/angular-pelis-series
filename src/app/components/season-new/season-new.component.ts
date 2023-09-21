import { Component, OnInit } from '@angular/core';
import { Season } from 'src/app/models/season';
import { SeasonService } from 'src/app/services/season.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-season-new',
  templateUrl: './season-new.component.html',
  styleUrls: ['./season-new.component.css'],
  providers: [SeasonService]
})
export class SeasonNewComponent implements OnInit {

  public subheaderTitle: String;
  public submitValue: String;
  public season: Season;

  constructor(
    private _seasonService: SeasonService,
    private _router: Router,
    private _route: ActivatedRoute
  ){

    this.subheaderTitle = 'CREAR TEMPORADA';
    this.submitValue = 'Crear';
    this.season = new Season('', '', '', '');

  }

  ngOnInit(): void{
  }

  onSubmit(){

      this._route.params.subscribe(params=>{

        let serieId = params['id'];

        this._seasonService.create(serieId, this.season).subscribe(
          response=>{

            if(response.status=='success'){

              this.season = response.season;

              // ALERTA

              swal(
                '¡¡¡Temporada creada!!!',
                'La temporada se ha creado correctamente',
                'success'
              );

              this._router.navigate(['/serie', this.season.id_serie]);

            }

          },

          error=>{

            console.log(error);

          }

        );

    });

  }

}
