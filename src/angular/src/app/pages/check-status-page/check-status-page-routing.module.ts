import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckStatusPageComponent } from './check-status-page.component';

const routes: Routes = [
  { path: '', component: CheckStatusPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckStatusPageRoutingModule { }
