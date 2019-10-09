import { Component, OnInit, Input } from '@angular/core';
import { LocalStoreService } from 'src/app/services/local-store.service';
import { IProduct } from '../../../../models/Product';

@Component({
	selector: 'app-input-counter',
	templateUrl: './input-counter.component.html',
	styleUrls: ['./input-counter.component.scss'],
})
export class InputCounterComponent implements OnInit {
	@Input() product: IProduct;
	count: number;

	constructor(
		public localStoreService: LocalStoreService
	) { }

	ngOnInit() { }

	increment() {
		this.count = ++this.product.count;
		const store = this.localStoreService.store;
		localStorage.setItem('cart', JSON.stringify(store));
	}
	decrement() {

		if (this.count <= 0) {
			return;
		}
		this.count = --this.product.count;
		const store = this.localStoreService.store;
		localStorage.setItem('cart', JSON.stringify(store));
	}
}
