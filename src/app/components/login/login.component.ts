import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit{

  public user: User;
  public apiUrl: string;
  public error = false;

  constructor(
    private _userService: UserService,
    private _router: Router
  ){

    if(this._userService.isLogged()){
      this._router.navigate(['/']);
    }

    this.user = new User('', '', '');
    this.apiUrl = environment.apiUrl;

  }

  ngOnInit(): void {
  }


  onSubmit(){

    this._userService.login(this.user).subscribe(
      response=>{

        if(response.status=='success'){

          localStorage.setItem('ACCESS_TOKEN', response.user.accessToken);

          this._router.navigate(['/']);

        }

      },

      error=>{

        console.log(error);
        this.error = true;

      }

    );

  }

}
