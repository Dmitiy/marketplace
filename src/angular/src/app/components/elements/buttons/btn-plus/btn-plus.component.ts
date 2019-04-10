import { Component, OnInit } from '@angular/core';
import { ControlsService } from '../../../../services/controls.service';

@Component({
  selector: 'app-btn-plus',
  templateUrl: './btn-plus.component.html',
  styleUrls: ['./btn-plus.component.scss'],
})
export class BtnPlusComponent implements OnInit {
  constructor(public controlsService: ControlsService) { }

  ngOnInit() { }
  increment() {
  }
}
