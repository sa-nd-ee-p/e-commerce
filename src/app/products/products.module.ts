import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule } from '@angular/router';


const PRODUCT_MODULE_ROUTING=[
  {path:'', component: ProductsComponent}
]
@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PRODUCT_MODULE_ROUTING)
  ],
  exports:[ProductsComponent]
})
export class ProductsModule { }
