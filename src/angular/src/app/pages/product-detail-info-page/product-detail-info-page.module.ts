import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductDetailInfoPageRoutingModule } from './product-detail-info-page-routing.module';
import { ProductDetailInfoPageComponent } from './product-detail-info-page.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { DetailCountComponent } from './components/detail-check-container/detail-count/detail-count.component';
import { DetailDescComponent } from './components/detail-check-container/detail-desc/detail-desc.component';
import { DetailCheckContainerComponent } from './components/detail-check-container/detail-check-container.component';
import { GalleriaModule } from 'primeng/galleria';

@NgModule({
  declarations: [
    ProductDetailInfoPageComponent,
    BreadcrumbsComponent,
    DetailCountComponent,
    DetailDescComponent,
    DetailCheckContainerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    GalleriaModule,
    ProductDetailInfoPageRoutingModule
  ]
})
export class ProductDetailInfoPageModule { }
