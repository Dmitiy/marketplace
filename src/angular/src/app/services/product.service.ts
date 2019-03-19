import { Injectable } from '@angular/core';
import { PRODUCTS } from '../models/mock-products';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    return PRODUCTS;
  }
}
