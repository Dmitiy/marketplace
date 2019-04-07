import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { COMPONENTS_LIST } from './components-list.component';
import { NGPRIME_MODULES_LIST } from './ng-prime-list.component';
@NgModule({
  declarations: [
    AppComponent,
    ...COMPONENTS_LIST,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ...NGPRIME_MODULES_LIST
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
