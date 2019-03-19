import { Component, OnInit } from '@angular/core';
import { Product } from './../../models/Product';
import { ProductService } from './../../services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  private products: Product[] = [];

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts(): void {
    this._productService.getProducts()
      .subscribe(res => this.products = res);
  }
  getBeds(): void {
    this._productService.getBeds()
      .subscribe(res => this.products = res);
  }
  getCupboards(): void {
    this._productService.getCupboards()
      .subscribe(res => this.products = res);
  }
  getKitchens(): void {
    this._productService.getKitchens()
      .subscribe(res => this.products = res);
  }
  getHouseholds(): void {
    this._productService.getHouseholds()
      .subscribe(res => this.products = res);
  }
}
