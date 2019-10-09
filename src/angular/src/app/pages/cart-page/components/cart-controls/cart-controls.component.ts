import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../../../../models/Product';
import { LocalStoreService } from '../../../../services/local-store.service';
import { ControlsService } from '../../../../services/controls.service';

@Component({
	selector: 'app-cart-controls',
	templateUrl: './cart-controls.component.html',
	styleUrls: ['./cart-controls.component.scss']
})
export class CartControlsComponent implements OnInit {
	@Input() id: number;
	@Input() product: IProduct;

	constructor(
		public controlsService: ControlsService,
		public localStoreService: LocalStoreService
	) { }

	ngOnInit() { }

	removeItem(product) {
		this.localStoreService.removeItem(product);
	}
}
