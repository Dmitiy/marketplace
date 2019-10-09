import { Component, OnInit } from '@angular/core';
import { LocalStoreService } from '../../../../services/local-store.service';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
	totalSum: number = 0;
	constructor(
		public localStoreService: LocalStoreService
	) { }

	ngOnInit() {
		this.totalSum = this.localStoreService.store
			.map((el) => el.count * el.price)
			.reduce((acc, total) => acc + total, 0);
	}

}
