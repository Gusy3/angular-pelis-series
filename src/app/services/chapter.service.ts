import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Chapter } from "../models/chapter";
import { environment } from "src/environments/environment";

@Injectable()
export class ChapterService{

    private apiUrl: string;

    constructor(
        private _http: HttpClient
    ){
        this.apiUrl = environment.apiUrl; 
    }

    create(seasonId: String, chapter: Chapter): Observable<any>{

        let params = JSON.stringify(chapter);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.apiUrl+'season/' + seasonId + '/save-chapter', params, {headers: headers});

    }

    getSeasons(idSerie: String): Observable<any>{

        return this._http.get(this.apiUrl+'serie/'+idSerie+'/seasons');

    }

    getChapter(chapterId: String): Observable<any>{

        return this._http.get(this.apiUrl+'chapter/' + chapterId);

    }

    update(chapterId: String, chapter: Chapter): Observable<any>{

        let params = JSON.stringify(chapter);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.put(this.apiUrl+'chapter/' + chapterId, params, {headers: headers});

    }

    
    delete(chapterId: String): Observable<any>{

        return this._http.delete(this.apiUrl+'chapter/' + chapterId);

    }

}