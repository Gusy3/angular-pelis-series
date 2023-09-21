import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private _userService: UserService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>>{

    const tokenizeRequest = request.clone({

      setHeaders: {

        Authorization: `Bearer ${this._userService.getToken()}`

      } 
    
    });

    return next.handle(tokenizeRequest);
  }
}
