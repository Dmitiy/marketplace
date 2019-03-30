import { IProduct } from "./../../../models/Product";
import { Component, OnInit, Input } from "@angular/core";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: "app-product-item",
  templateUrl: "./product-item.component.html",
  styleUrls: ["./product-item.component.scss"],
})
export class ProductItemComponent implements OnInit {
  @Input() product: IProduct[];
  @Input() category: string;
  constructor() {}

  ngOnInit() {}
  addToCart(event) {
    console.log(event);
  }
}
