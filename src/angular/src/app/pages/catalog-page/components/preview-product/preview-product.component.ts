import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-preview-product",
  templateUrl: "./preview-product.component.html",
  styleUrls: ["./preview-product.component.scss"],
})
export class PreviewProductComponent implements OnInit {
  category: string;
  constructor(private _router: Router) { }

  ngOnInit() {
    this.category = this._router.url;
  }
}
