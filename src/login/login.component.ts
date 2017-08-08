import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: any = {
    userName: '',
    password: ''
  }
  constructor(
    private _router: Router,
    private _authService: AuthService
  ) { }
  public onSubmit(): void {
    this._authService.login(this.user)
      .subscribe(result => {
        console.log(result);
        if (result) {
          let userInfo: any = JSON.parse(localStorage.getItem('wuhanBlog'));
          switch (userInfo.status) {
            case 1:
              this._router.navigateByUrl('/admin');
              break;
            case -1:
              this._router.navigateByUrl('/home');
              break;
            case -2:
              this._router.navigateByUrl('/home');
              break;
            default:
             this._router.navigateByUrl('/home');
              break;
          }
        } else {
          this._router.navigateByUrl('/home');
        }
      });
  }

  ngOnInit() {
  }

}