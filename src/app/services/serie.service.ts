import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Serie } from "../models/serie";
import { environment } from "src/environments/environment";

@Injectable()
export class SerieService{

    private apiUrl: string;

    constructor(
        private _http: HttpClient
    ){
        this.apiUrl = environment.apiUrl; 
    }

    create(serie: Serie):Observable<any>{

        let params = JSON.stringify(serie);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.apiUrl+'serie/save', params, {headers: headers});

    }

    getSeries():Observable<any>{

        return this._http.get(this.apiUrl+'series');

    }

    getSerie(id: String):Observable<any>{

        return this._http.get(this.apiUrl+'serie/'+id);

    }

    update(id: String, serie: Serie): Observable<any>{

        let params = JSON.stringify(serie);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.put(this.apiUrl+'serie/'+id, params, {headers: headers});

    }

    delete(id: String): Observable<any>{

        return this._http.delete(this.apiUrl+'serie/'+id);

    }

    search(params: any): Observable<any>{

        return this._http.get(this.apiUrl+'serie/search?title='+params.title);

    }

    getChapters(idSeason: String): Observable<any>{

        return this._http.get(this.apiUrl+'season/'+idSeason+'/chapters');

    }

}