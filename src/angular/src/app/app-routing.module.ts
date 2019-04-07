import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CatalogPageComponent } from './pages/catalog-page/catalog-page.component';
import { ProductDetailInfoPageComponent } from './pages/product-detail-info-page/product-detail-info-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { CheckStatusPageComponent } from './pages/check-status-page/check-status-page.component';
import { DetailOrderPageComponent } from './pages/detail-order-page/detail-order-page.component';

const routes: Routes = [

  { path: '', redirectTo: 'chairs', pathMatch: 'full' },
  { path: '', component: CatalogPageComponent },
  { path: ':category/:id', component: ProductDetailInfoPageComponent },

  // { path: '', loadChildren: './pages/catalog-page/catalog-page.module#ProductDetailInfoPageComponent' },

  { path: 'chairs', component: CatalogPageComponent },
  { path: 'beds', component: CatalogPageComponent },
  { path: 'cupboards', component: CatalogPageComponent },
  { path: 'kitchens', component: CatalogPageComponent },
  { path: 'households', component: CatalogPageComponent },

  { path: 'cart', component: CartPageComponent },
  // { path: 'cart', loadChildren: './pages/cart-page/cart-page.module#CartPageModule' },

  { path: 'check-status', component: CheckStatusPageComponent },
  // { path: 'check-status', loadChildren: './pages/check-status-page/check-status-page.module#CheckStatusPageModule' },

  { path: 'detail-order', component: DetailOrderPageComponent },
  // { path: 'detail-order', loadChildren: './pages/detail-order-page/detail-order-page.component#DetailOrderPageModule' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
