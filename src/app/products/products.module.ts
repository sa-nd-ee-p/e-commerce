import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule } from '@angular/router';
import { LoginGuardService } from '../services/login-guard.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


const PRODUCT_MODULE_ROUTING=[
 {path:'', component: ProductsComponent,canActivate: [LoginGuardService]}
]
@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PRODUCT_MODULE_ROUTING),
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  exports:[ProductsComponent]
})
export class ProductsModule { }
