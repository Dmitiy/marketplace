import { Component, OnInit } from "@angular/core";
import { ControlsService } from "../../../../services/controls.service";

@Component({
  selector: "app-burger",
  templateUrl: "./burger.component.html",
  styleUrls: ["./burger.component.scss"],
})
export class BurgerComponent implements OnInit {
  constructor(public controlsService: ControlsService) {}

  ngOnInit() {}

  toggleMenu(): void {
    this.controlsService.isOpenMenu();
  }
}
