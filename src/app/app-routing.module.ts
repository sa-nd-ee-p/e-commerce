import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuardService } from './services/login-guard.service';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',loadChildren:()=>import('src/app/login/login.module').then(m=>m.LoginModule),data:{breadcrumb:''}},
  {path:'about',loadChildren:()=>import('src/app/about/about.module').then(m=>m.AboutModule),data:{breadcrumb:''}},
  {path:'products',loadChildren:()=>import('src/app/products/products.module').then(m=>m.ProductsModule),canActivate:[LoginGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
