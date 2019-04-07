import { Injectable } from '@angular/core';
import { IProduct } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class LocalStoreService {

  public counterCart: number = 0;
  private _category: string;
  private _cartfromStorage = localStorage.getItem('cart');
  private _cart = this._cartfromStorage ? JSON.parse(this._cartfromStorage) : {};
  private _store: any[] = [];

  constructor() { }

  addToLocalStorage(product: IProduct) {

    this._store.push(product);
    localStorage.setItem('cart', JSON.stringify(this._store));
    this.showCartCount();
  }

  showCartCount() {
    this.counterCart = JSON.parse(this._cartfromStorage);
    console.log('store', this._cart);

  }

  // removefromCart(id: number) {
  //   delete this.cart[id];
  //   localStorage.setItem('cart', JSON.stringify(this.cart));
  // }

  // updateCounterCart( id, count) {
  //   this.cart[id] = count;
  //   localStorage.setItem('cart', JSON.stringify(this.cart));
  // }
}
