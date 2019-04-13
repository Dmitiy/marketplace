import { Component, OnInit } from '@angular/core';
import { LocalStoreService } from '../../../../services/local-store.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(
    public localStoreService: LocalStoreService
  ) { }

  ngOnInit() { }

}
