import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogPageComponent } from './pages/catalog/catalog-page.component';
import { CartPageComponent } from './pages/cart/cart-page.component';
import { DetailItemPageComponent } from './pages/detail-item/detail-item-page.component';
import { DetailOrderPageComponent } from './pages/detail-order/detail-order-page.component';
import { OrderStatusPageComponent } from './pages/order-status/order-status-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CheckStatusLayoutComponent } from './layouts/check-status-layout/check-status-layout.component';

const routes: Routes = [
  { path: '', redirectTo: '/catalog', pathMatch: 'full' },
  {
    path: 'catalog',
    component: CatalogPageComponent,
  },
  {
    path: 'catalog/:id',
    component: DetailItemPageComponent,
  },
  { path: 'cart', component: CartPageComponent },
  { path: 'detail-item', component: DetailItemPageComponent },
  { path: 'detail-order', component: DetailOrderPageComponent },
  { path: 'order-status', component: OrderStatusPageComponent },
  { path: 'check-status', component: CheckStatusLayoutComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
