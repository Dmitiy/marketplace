import { NAVS } from './../../models/mock-nav';
import { Component, OnInit } from '@angular/core';
import { Nav } from 'src/app/models/Nav';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  private navs: Nav[] = NAVS;

  constructor() { }

  ngOnInit() {
  }

}
