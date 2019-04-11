import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/models/Product';
import { LocalStoreService } from 'src/app/services/local-store.service';

@Component({
  selector: 'app-cart-controls',
  templateUrl: './cart-controls.component.html',
  styleUrls: ['./cart-controls.component.scss']
})
export class CartControlsComponent implements OnInit {
  @Input() id: number;
  @Input() product: IProduct;

  constructor(
    public localStoreService: LocalStoreService
  ) { }

  ngOnInit() {
  }
  removeItem(product) {
    this.localStoreService.removeItem(product);
}
}
