import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Film } from "../models/film";
import { environment } from "src/environments/environment";

@Injectable()
export class FilmService{

    private apiUrl: string;

    constructor(
        private _http: HttpClient
    ){
        this.apiUrl = environment.apiUrl; 
    }

    create(film: Film):Observable<any>{

        let params = JSON.stringify(film);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.apiUrl+'save', params, {headers: headers});

    }

    getFilms():Observable<any>{

        return this._http.get(this.apiUrl+'films');

    }

    getFilm(id: String):Observable<any>{

        return this._http.get(this.apiUrl+'film/'+id);

    }

    update(id: String, film: Film): Observable<any>{

        let params = JSON.stringify(film);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.put(this.apiUrl+'film/'+id, params, {headers: headers});

    }

    delete(id: String): Observable<any>{

        return this._http.delete(this.apiUrl+'film/'+id);

    }

    search(search: String): Observable<any>{

        return this._http.get(this.apiUrl+'search/'+search);

    }

}