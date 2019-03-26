import { Component, OnInit } from '@angular/core';
import { InputCounterService } from 'src/app/services/input-counter.service';

@Component({
  selector: 'app-btn-minus',
  templateUrl: './btn-minus.component.html',
  styleUrls: ['./btn-minus.component.scss'],
})
export class BtnMinusComponent implements OnInit {
  constructor(public inputCounterService: InputCounterService) {}

  ngOnInit() {}
  decrement() {
    this.inputCounterService.decrement();
  }
}
