import { Component, OnInit, Input } from '@angular/core';
import { LocalStoreService } from 'src/app/services/local-store.service';
import { IProduct } from 'src/app/models/Product';

@Component({
  selector: 'app-cart-detail-order',
  templateUrl: './cart-detail-order.component.html',
  styleUrls: ['./cart-detail-order.component.scss']
})
export class CartDetailOrderComponent implements OnInit {
  @Input() product: IProduct;
  constructor(
    public localStoreService: LocalStoreService
  ) { }

  ngOnInit() {
  }

}
