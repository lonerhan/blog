import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private _router: Router,
    private _authService: AuthService
  ) { }

  /**
   * 有无权限访问
   */
  public canActivate(): boolean {
    if (this._authService.loggedIn()) {
      if (this._authService.hasRole()) {
        
        return true;
      } else {
        this._router.navigateByUrl('/home');
        return false;
      }
    } else {
      this._router.navigateByUrl('/login');
      return false;
    }
  }
}