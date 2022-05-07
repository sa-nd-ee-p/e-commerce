import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { RouterModule } from '@angular/router';

const ABOUT_MODULE_ROUTING=[
  {path:'', component: AboutComponent}
]

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ABOUT_MODULE_ROUTING)
  ],
  exports:[AboutComponent]
})
export class AboutModule { }
