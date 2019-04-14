import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-detail-desc',
  templateUrl: './detail-desc.component.html',
  styleUrls: ['./detail-desc.component.scss']
})
export class DetailDescComponent implements OnInit {
  @Output() titleItem: string;
  constructor() { }

  ngOnInit() {
  }

}
