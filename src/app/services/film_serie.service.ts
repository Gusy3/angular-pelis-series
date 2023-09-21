import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Chapter } from "../models/chapter";
import { environment } from "src/environments/environment";

@Injectable()
export class FilmSerieService{

    private apiUrl: string;

    constructor(
        private _http: HttpClient
    ){
        this.apiUrl = environment.apiUrl; 
    }

    getFilmsSeries(): Observable<any>{

        return this._http.get(this.apiUrl+'films-series');

    }

    search(params: any): Observable<any>{

        return this._http.get(this.apiUrl+'search?title='+params.title);

    }

}