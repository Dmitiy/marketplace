import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailOrderPageRoutingModule } from './detail-order-page-routing.module';
import { DetailOrderPageComponent } from './detail-order-page.component';
import { ProgressRoadComponent } from './components/progress-road/progress-road.component';
import { DetailStatusOrderHeaderComponent } from './components/detail-status-order-header/detail-status-order-header.component';
import { DetailStatusOrderFooterComponent } from './components/detail-status-order-footer/detail-status-order-footer.component';
import { CartDetailOrderComponent } from './components/cart-detail-order/cart-detail-order.component';

@NgModule({
  declarations: [
    DetailOrderPageComponent,
    ProgressRoadComponent,
    DetailStatusOrderHeaderComponent,
    DetailStatusOrderFooterComponent,
    CartDetailOrderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    DetailOrderPageRoutingModule,
  ]
})
export class DetailOrderPageModule { }
