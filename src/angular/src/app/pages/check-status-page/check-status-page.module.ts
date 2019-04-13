import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CheckStatusPageRoutingModule } from './check-status-page-routing.module';
import { CheckStatusPageComponent } from './check-status-page.component';

@NgModule({
  declarations: [
    CheckStatusPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CheckStatusPageRoutingModule
  ]
})
export class CheckStatusPageModule { }
