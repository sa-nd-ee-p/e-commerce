import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService {
  constructor(private loginService: LoginService, private router: Router) { }
  canActivate(): boolean {
      if (this.loginService.isUserLoggedIn() || sessionStorage.getItem("isLoggedIn")) {
          return true;
      }
      this.router.navigate(['/login']);
      return false;
  }
}
