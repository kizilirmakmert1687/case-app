import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriComponent } from './categori/categori.component';
import { ProductAppComponent } from './product-app/product-app.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'categori', component: CategoriComponent },
  { path: 'productAdd', component: ProductAppComponent },
  { path: 'product', component: ProductComponent },
  { path: '', component: HomeComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
