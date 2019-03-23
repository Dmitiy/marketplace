import { Product } from 'src/app/models/Product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  _products: Product[] = [];

  constructor(
    private _productService: ProductService,
    private _router: Router,
  ) {}

  ngOnInit() {
    this._productService
      .getProducts(this._router.url)
      .subscribe((res) => (this._products = res));
  }
}
