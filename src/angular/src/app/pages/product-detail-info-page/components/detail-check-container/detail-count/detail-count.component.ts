import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-count',
  templateUrl: './detail-count.component.html',
  styleUrls: ['./detail-count.component.scss']
})
export class DetailCountComponent implements OnInit {
  count: number = 1;
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
