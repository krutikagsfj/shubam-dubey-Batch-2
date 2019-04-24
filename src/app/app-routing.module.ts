import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ProductBrandsComponent } from './pages/product-brands/product-brands.component';


// here we are giving path for the two components
// which we are linking to home page
const routes: Routes =  [
  { path:'About',component:AboutComponent},
  {path:'ProductBrands',component:ProductBrandsComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
