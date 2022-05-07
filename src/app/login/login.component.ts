import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  invalidCredentialMsg!: string;
  loginForm!: FormGroup;
  constructor(
    private loginService: LoginService,
    private router: Router,
    private formbuilder: FormBuilder
  ) {
    this.loginForm = this.formbuilder.group({
      username: ['',Validators.required],
      password: ['',Validators.required],
    });
  }
  onFormSubmit(): void {
    const uname = this.loginForm.value.username;
    const pwd = this.loginForm.value.password;
    this.loginService
      .isUserAuthenticated(uname, pwd)
      .subscribe({next:(authenticated) => {
        if (authenticated) {
          this.router.navigate(['/about']);
        } else {
          this.invalidCredentialMsg = 'Invalid Credentials. Try again.';
        }
      }});
  }

}
