import { Component, OnInit } from "@angular/core";
import { SliderModule } from "primeng/slider";
@Component({
  selector: "app-range-slider",
  templateUrl: "./range-slider.component.html",
  styleUrls: ["./range-slider.component.scss"],
})
export class RangeSliderComponent implements OnInit {
  rangeValues: number[] = [20, 80];
  constructor() { }

  ngOnInit() { }
}
