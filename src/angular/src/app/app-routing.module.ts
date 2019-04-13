import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: 'chairs', pathMatch: 'full' },
  { path: '', loadChildren: './pages/catalog-page/catalog-page.module#CatalogPageModule' },
  { path: ':category/:id', loadChildren: './pages/product-detail-info-page/product-detail-info-page.module#ProductDetailInfoPageModule' },
  { path: 'cart', loadChildren: './pages/cart-page/cart-page.module#CartPageModule' },
  { path: 'check-status', loadChildren: './pages/check-status-page/check-status-page.module#CheckStatusPageModule' },
  { path: 'detail-order', loadChildren: './pages/detail-order-page/detail-order-page.module#DetailOrderPageModule' },
  { path: '**', loadChildren: './pages/page-not-found/page-not-found.module#PageNotFoundModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
