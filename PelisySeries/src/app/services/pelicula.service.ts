import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Pelicula } from "../models/pelicula";

@Injectable()
export class PeliculaService{

    constructor(
        private _http: HttpClient,

    ){}

}