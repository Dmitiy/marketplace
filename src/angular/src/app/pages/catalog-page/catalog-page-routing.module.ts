import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogPageComponent } from './catalog-page.component';

const routes: Routes = [

  { path: '', component: CatalogPageComponent },
  { path: 'chairs', component: CatalogPageComponent },
  { path: 'beds', component: CatalogPageComponent },
  { path: 'cupboards', component: CatalogPageComponent },
  { path: 'kitchens', component: CatalogPageComponent },
  { path: 'households', component: CatalogPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogPageRoutingModule { }
