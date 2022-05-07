import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const LOGIN_MODULE_ROUTING=[
  {path:'', component: LoginComponent}
]
@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(LOGIN_MODULE_ROUTING),
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[LoginComponent]
})
export class LoginModule { }
