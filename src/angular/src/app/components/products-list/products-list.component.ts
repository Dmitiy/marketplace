import { Component, OnInit } from '@angular/core';
import { Product } from './../../models/Product';
import { ProductService } from './../../services/product.service';
import { PRODUCTS } from 'src/app/models/mock-products';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: Product[];

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this.products = this._productService.getProducts();
    // this.products = PRODUCTS;
  }

}
