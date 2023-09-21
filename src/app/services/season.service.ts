import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Season } from "../models/season";
import { environment } from "src/environments/environment";

@Injectable()
export class SeasonService{

    private apiUrl: string;

    constructor(
        private _http: HttpClient
    ){
        this.apiUrl = environment.apiUrl; 
    }

    create(serieId: String, season: Season): Observable<any>{

        let params = JSON.stringify(season);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.apiUrl+'serie/' + serieId + '/save-season', params, {headers: headers});

    }

    getSeasons(idSerie: String): Observable<any>{

        return this._http.get(this.apiUrl+'serie/'+idSerie+'/seasons');

    }

    getSeason(seasonId: String): Observable<any>{

        return this._http.get(this.apiUrl+'season/' + seasonId);

    }

    update(seasonId: String, season: Season): Observable<any>{

        let params = JSON.stringify(season);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.put(this.apiUrl+'season/' + seasonId, params, {headers: headers});

    }

    
    delete(seasonId: String): Observable<any>{

        return this._http.delete(this.apiUrl+'season/' + seasonId);

    }

}