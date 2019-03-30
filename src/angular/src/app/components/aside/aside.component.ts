import { Component, OnInit } from "@angular/core";
import { ControlsService } from "../../services/controls.service";

@Component({
  selector: "app-aside",
  templateUrl: "./aside.component.html",
  styleUrls: ["./aside.component.scss"],
})
export class AsideComponent implements OnInit {
  constructor(public controlsService: ControlsService) {}

  ngOnInit() {}
}
