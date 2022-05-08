import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { RouterModule } from '@angular/router';


const NAVBAR_MODULE_ROUTING=[
  // ,canActivate: [LoginGuardService]
  {path:'', component: NavbarComponent}
]
@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(NAVBAR_MODULE_ROUTING)
  ],
  exports:[NavbarComponent]
})
export class NavbarModule { }
