import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartPageRoutingModule } from './cart-page-routing.module';
import { CartPageComponent } from './cart-page.component';
import { CartComponent } from './components/cart/cart.component';
import { CartControlsComponent } from './components/cart-controls/cart-controls.component';
import { FormCheckoutOrderAddressComponent } from './components/form-checkout-order-address/form-checkout-order-address.component';
import { FormCheckoutOrderReceiverComponent } from './components/form-checkout-order-receiver/form-checkout-order-receiver.component';
import { InputCounterComponent } from './components/input-counter/input-counter.component';
import { TicketComponent } from './components/ticket/ticket.component';

@NgModule({
  declarations: [
    CartPageComponent,
    CartComponent,
    CartControlsComponent,
    FormCheckoutOrderAddressComponent,
    FormCheckoutOrderReceiverComponent,
    InputCounterComponent,
    TicketComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CartPageRoutingModule
  ]
})
export class CartPageModule { }
