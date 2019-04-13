import { Component, OnInit } from '@angular/core';
import { LocalStoreService } from 'src/app/services/local-store.service';
import { ControlsService } from 'src/app/services/controls.service';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss']
})
export class MenuHeaderComponent implements OnInit {

  constructor(
    public localStoreService: LocalStoreService,
    public controlsService: ControlsService,
  ) { }

  ngOnInit() { }
}
