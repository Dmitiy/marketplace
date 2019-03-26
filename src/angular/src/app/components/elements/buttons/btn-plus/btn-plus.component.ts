import { Component, OnInit } from '@angular/core';
import { InputCounterService } from 'src/app/services/input-counter.service';

@Component({
  selector: 'app-btn-plus',
  templateUrl: './btn-plus.component.html',
  styleUrls: ['./btn-plus.component.scss'],
})
export class BtnPlusComponent implements OnInit {
  constructor(public inputCounterService: InputCounterService) {}

  ngOnInit() {}
  increment() {
    this.inputCounterService.increment();
  }
}
