import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DetailOrderPageComponent } from './detail-order-page.component';

const routes: Routes = [
  { path: '', component: DetailOrderPageComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DetailOrderPageModule { }
