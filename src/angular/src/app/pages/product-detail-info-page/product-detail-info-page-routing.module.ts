import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailInfoPageComponent } from './product-detail-info-page.component';

const routes: Routes = [
  { path: '', component: ProductDetailInfoPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductDetailInfoPageRoutingModule { }
