import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { COMPONENTS_LIST } from './components-list.component';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [AppComponent, ...COMPONENTS_LIST],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, FormsModule],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule { }
