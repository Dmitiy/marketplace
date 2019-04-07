import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ProductService } from '../../services/product.service';
import { IProduct } from 'src/app/models/Product';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.scss']
})
export class CatalogPageComponent implements OnInit {
  products: IProduct[] = [];
  category: string;
  id: number;
  constructor(
    private _productService: ProductService,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.category = this._router.url;
    this._productService
      .getProducts(this.category)
      .subscribe((res) => (this.products = res));
  }

}
