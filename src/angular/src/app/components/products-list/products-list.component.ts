import { IProduct } from 'src/app/models/Product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products: IProduct[] = [];
  category: string;
  constructor(
    private _productService: ProductService,
    private _router: Router,
  ) {}

  ngOnInit() {
    this.category = this._router.url;
    this._productService
      .getProducts(this.category)
      .subscribe((res) => (this.products = res));
  }
}
