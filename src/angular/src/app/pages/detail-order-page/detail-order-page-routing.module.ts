import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailOrderPageComponent } from './detail-order-page.component';

const routes: Routes = [
  { path: '', component: DetailOrderPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailOrderPageRoutingModule { }
