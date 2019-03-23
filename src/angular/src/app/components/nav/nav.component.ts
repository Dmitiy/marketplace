import { Component, OnInit } from '@angular/core';
import { INav } from 'src/app/models/Nav';
import { NAVS } from 'src/app/models/mock-nav';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  private _navs: INav[] = [];

  constructor() {}

  ngOnInit() {
    this.getNavs();
  }

  getNavs() {
    return (this._navs = NAVS);
  }
}
