import { Injectable } from '@angular/core';
import { IProduct } from '../models/Product';

@Injectable({
	providedIn: 'root'
})
export class LocalStoreService {

	counterCart: number = 0;
	store: IProduct[] = [];
	wordEnds: string;

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
		this.store = this.store.filter(item => {
			return item.id !== val.id;
		});

		localStorage.setItem('cart', JSON.stringify(this.store));
		this.counterCart = this.store.length;
	}

	// окончание слов
	checkCounterFunc(n) {
		n = this.store.length;
		/*
		* товар - 1 | 21 | 31 | 41 | 51 | 61 |71 | 81 | 91 | 101 ...
		* товара - 2 | 3 | 4 | 22 | 23 | 24 | 32 | 33 | 34 ...
		* товаров - 0 | 5 | 6 | 7 | 8 | 9 | 10-20 | 25-30 | 35-40 ...
		*
		*/
		if ((n === 1) || (n > 20 && n % 10 === 1)) {
			this.wordEnds = "товар";
		}
		else if ((n >= 2 && n <= 4) || (n > 20 && n % 10 >= 2 && n % 10 <= 4)) {
			this.wordEnds = "товара";
		}
		else { this.wordEnds = "товаров" };

		return this.wordEnds;
	}
}
