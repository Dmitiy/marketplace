import { Component, OnInit, OnDestroy } from '@angular/core';
import { LocalStoreService } from '../../../../services/local-store.service';
import { take } from 'rxjs/operators';
import { Subscription, Subject } from 'rxjs';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
	totalSum = 0;
	private _subscription: Subject<any> = new Subject<any>();
	subs: Subscription;

	constructor(
		public localStoreService: LocalStoreService
	) { }

	ngOnInit() {
		this.totalSum = this.localStoreService.totalPrice();
		this.subs = this.localStoreService.store$.pipe().subscribe(res => {
			if (res.length) {
				this.totalSum = res.map(el => el.price * el.count).reduce((a, b) => a + b, 0);
			} else {
				this.totalSum = 0;
			}
			console.log(this.totalSum);

		});
	}

	ngOnDestroy() {
		// this.localStoreService.store$.unsubscribe();
		// this._subscription.next();
		// this._subscription.complete();
		this.subs.unsubscribe();
	}
}
