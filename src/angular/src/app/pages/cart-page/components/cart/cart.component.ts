import { Component, OnInit, OnDestroy } from '@angular/core';
import { LocalStoreService } from '../../../../services/local-store.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
	totalSum;
	subs: Subscription;

	constructor(
		public localStoreService: LocalStoreService
	) { }

	ngOnInit() {
		this.totalSum = this.localStoreService.setLocalStorage();
		this.subs = this.localStoreService.store$.subscribe(res => {
			if (res.length) {
				this.totalSum = res.map(el => el.price * el.count).reduce((a, b) => a + b, 0);
			} else {
				this.totalSum = 0;
			}
		});
	}

	ngOnDestroy() {
		this.subs.unsubscribe();
	}
}
