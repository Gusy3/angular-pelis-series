import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../models/user";
import { environment } from "src/environments/environment";

@Injectable()
export class UserService{

    private apiUrl: string;

    constructor(
        private _http: HttpClient
    ){
        this.apiUrl = environment.apiUrl;
    }

    login(user: User): Observable<any>{

        let params = JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.apiUrl+'login', params, {headers: headers});

    }

    isLogged(): boolean{

        if(localStorage.getItem('ACCESS_TOKEN')){

            return true;

        }else{

            return false;

        }

    }

    getToken(): any{

        return localStorage.getItem('ACCESS_TOKEN');

    }

}