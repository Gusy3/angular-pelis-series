import { Component, OnInit } from '@angular/core'; 
import { Serie } from 'src/app/models/serie';
import { SerieService } from 'src/app/services/serie.service';
import { environment } from 'src/environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-serie-edit',
  templateUrl: '../serie-new/serie-new.component.html',
  styleUrls: ['./serie-edit.component.css'],
  providers: [SerieService]
})
export class SerieEditComponent implements OnInit {

  public subheaderTitle: String;
  public submitValue: String;
  public serie: Serie;
  public versions: String[];
  public genders: String[];
  public resolutions: String[];
  public codecs: String[];

  constructor(
    private _serieService: SerieService,
    private _router: Router,
    private _route: ActivatedRoute
  ){

    this.subheaderTitle = 'EDITAR SERIE';
    this.submitValue = 'Editar';
    this.serie = new Serie('', '', '', 0, '', '', '', new Date());
    this.versions = environment.versions;
    this.genders = environment.genders;
    this.resolutions = environment.resolutions;
    this.codecs = environment.codecs;

  }

  ngOnInit(): void{

    this.getSerie();

  }

  getSerie(){

    this._route.params.subscribe(params=>{

      let id = params['id'];

      this._serieService.getSerie(id).subscribe(
        
        response=>{

          if(response.serie){

            this.serie = response.serie;

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

    this._serieService.update(this.serie._id, this.serie).subscribe(
      response=>{

        if(response.status=='success'){

          this.serie = response.serie;

          // ALERTA

          swal(
            '¡¡¡Serie editada!!!',
            'La serie se ha editado correctamente',
            'success'
          );

          this._router.navigate(['/serie', this.serie._id]);

        }

      },

      error=>{

        console.log(error);

      }

    );

  }

}
