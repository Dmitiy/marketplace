import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CheckStatusPageComponent } from './check-status-page.component';

const routes: Routes = [
  { path: '', component: CheckStatusPageComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CheckStatusPageModule { }
