import { Component, OnInit } from '@angular/core';
import { ControlsService } from '../../../../services/controls.service';

@Component({
  selector: 'app-btn-minus',
  templateUrl: './btn-minus.component.html',
  styleUrls: ['./btn-minus.component.scss'],
})
export class BtnMinusComponent implements OnInit {
  constructor(public controlsService: ControlsService) { }

  ngOnInit() { }
  decrement() {
  }
}