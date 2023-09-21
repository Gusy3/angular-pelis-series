import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate{

  constructor(
    private _userService: UserService,
    private _router: Router
  ){}

  canActivate(): boolean{

    if(this._userService.isLogged()){

      return true;

    }

    this._router.navigate(['login']);
    return false;

  }
  
}
