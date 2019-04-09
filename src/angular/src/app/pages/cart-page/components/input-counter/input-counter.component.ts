import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/models/Product';

@Component({
  selector: 'app-input-counter',
  templateUrl: './input-counter.component.html',
  styleUrls: ['./input-counter.component.scss'],
})
export class InputCounterComponent implements OnInit {
  count: number = 1;
  // @Input() product: IProduct;

  constructor() { }

  ngOnInit() {
  }

  increment() {
    this.count++;
  }
  decrement() {
    if (this.count <= 0) {
      return
    }
    this.count--;
  }
}
