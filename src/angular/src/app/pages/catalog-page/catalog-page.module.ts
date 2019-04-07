import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailInfoPageComponent } from '../product-detail-info-page/product-detail-info-page.component';

const routes: Routes = [

  { path: ':category/:id', component: ProductDetailInfoPageComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CatalogPageModule { }
