import { Injectable } from '@angular/core';
import { IProduct } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class LocalStoreService {

  public counterCart: number = 0;
  public store: IProduct[] = [];

  constructor() {
    const cart = localStorage.getItem('cart');
    this.store = cart ? JSON.parse(cart) : [];
    this.counterCart = this.store.length;
  }

  updateLocalStorage(product: IProduct) {
    this.store.push(product);
    localStorage.setItem('cart', JSON.stringify(this.store));
    this.counterCart = this.store.length;
  }

  removeItem(val: any) {
    let index = this.store.filter(item => item !== val);

    if (this.store.find(index => index === val)) {
      this.store.splice(this.store.indexOf(val), 1);
    }

    this.counterCart = this.store.length;
  }
}
