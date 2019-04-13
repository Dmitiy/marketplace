import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CatalogPageRoutingModule } from './catalog-page-routing.module';
import { CatalogPageComponent } from './catalog-page.component';
import { PreviewProductComponent } from './components/preview-product/preview-product.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductItemBigComponent } from './components/product-item-big/product-item-big.component';
import { ControlsFieldComponent } from './components/controls-field/controls-field.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { RangeSliderComponent } from './components/range-slider/range-slider.component';
import { PaginatorModule } from "primeng/paginator";
import { SliderModule } from "primeng/slider";
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    CatalogPageComponent,
    PreviewProductComponent,
    ProductItemComponent,
    ProductItemBigComponent,
    ControlsFieldComponent,
    PreloaderComponent,
    RangeSliderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PaginatorModule,
    SliderModule,
    DropdownModule,
    CatalogPageRoutingModule
  ]
})
export class CatalogPageModule { }
