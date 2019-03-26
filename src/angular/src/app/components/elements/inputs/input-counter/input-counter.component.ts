import { Component, OnInit } from '@angular/core';
import { InputCounterService } from 'src/app/services/input-counter.service';

@Component({
  selector: 'app-input-counter',
  templateUrl: './input-counter.component.html',
  styleUrls: ['./input-counter.component.scss'],
})
export class InputCounterComponent implements OnInit {
  constructor(public inputCounterService: InputCounterService) {}

  ngOnInit() {}

  decrementCount() {
    this.inputCounterService.decrement();
  }
  incrementCount() {
    this.inputCounterService.increment();
  }
}
