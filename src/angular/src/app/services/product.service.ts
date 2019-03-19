import { Injectable } from '@angular/core';
import { PRODUCTS } from '../models/mock-products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products;
  constructor() { }
  getProducts() {
    // return this.products = PRODUCTS;
  }
}
