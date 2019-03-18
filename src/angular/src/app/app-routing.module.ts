import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogPageComponent } from './pages/catalog/catalog-page.component.ts';
import { CartPageComponent } from './pages/cart/cart-page.component.ts';
import { DetailItemPageComponent } from './pages/detail-item/detail-item-page.component.ts';
import { DetailOrderPageComponent } from './pages/detail-order/detail-order-page.component.ts';
import { OrderStatusPageComponent } from './pages/order-status/order-status-page.component.ts';

const routes: Routes = [
  { path: '', redirectTo: '/catalog', pathMatch: 'full' },
  { path: 'catalog', component: 'CatalogPageComponent' },
  {
    path: 'catalog/:id',
    component: 'DetailItemPageComponent',
  },
  { path: 'cart', component: 'CartPageComponent' },
  { path: 'detail-item', component: 'DetailItemPageComponent' },
  { path: 'detail-order', component: 'DetailOrderPageComponent' },
  { path: 'order-status', component: 'OrderStatusPageComponent' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
