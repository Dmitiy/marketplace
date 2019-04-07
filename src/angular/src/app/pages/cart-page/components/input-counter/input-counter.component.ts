import { Component, OnInit } from '@angular/core';
import { ControlsService } from '../../../../services/controls.service';

@Component({
  selector: 'app-input-counter',
  templateUrl: './input-counter.component.html',
  styleUrls: ['./input-counter.component.scss'],
})
export class InputCounterComponent implements OnInit {
  constructor(public controlsService: ControlsService) {}
  ngOnInit() {}

  decrementCount() {
    this.controlsService.decrement();
  }
  incrementCount() {
    this.controlsService.increment();
  }
}
