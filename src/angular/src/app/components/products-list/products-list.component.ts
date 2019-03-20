import { Component, OnInit } from '@angular/core';
import { Product } from './../../models/Product';
import { ProductService } from './../../services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  private _products: Product[] = [];

  private _chairs: Product[] = [];
  private _beds: Product[] = [];
  private _cupboards: Product[] = [];
  private _kitchens: Product[] = [];
  private _households: Product[] = [];

  constructor(private _productService: ProductService) {}

  ngOnInit() {
    this.getProducts();
  }
  getProducts(): void {
    this._productService
      .getProducts()
      .subscribe((res) => (this._products = res));
  }

  onSelect(product) {
    console.log(product);
  }
}
