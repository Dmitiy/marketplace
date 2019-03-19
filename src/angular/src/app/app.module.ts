import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { COMPONENTS_LIST } from './components-list.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [AppComponent, ...COMPONENTS_LIST, PreloaderComponent, BreadcrumbsComponent,],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
