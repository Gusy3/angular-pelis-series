import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/models/serie';
import { SerieService } from 'src/app/services/serie.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-serie-new',
  templateUrl: './serie-new.component.html',
  styleUrls: ['./serie-new.component.css'],
  providers: [SerieService]
})
export class SerieNewComponent implements OnInit {

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
  ){

    this.subheaderTitle = 'CREAR SERIE';
    this.submitValue = 'Crear';
    this.serie = new Serie('', '', '', 0, '', '', '', new Date());
    this.versions = environment.versions;
    this.genders = environment.genders;
    this.resolutions = environment.resolutions;
    this.codecs = environment.codecs;

  }

  ngOnInit(): void {
  }

  onSubmit(){

    this._serieService.create(this.serie).subscribe(
      response=>{

        if(response.status=='success'){

          this.serie = response.serie;

          // ALERTA

          swal(
            '¡¡¡Serie creada!!!',
            'La serie se ha creado correctamente',
            'success'
          );

          this._router.navigate(['/series']);

        }

      },

      error=>{

        console.log(error);

      }

    );

  }

}
