import { IProduct } from "src/app/models/Product";
import { Component, OnInit } from "@angular/core";
import { ProductService } from "src/app/services/product.service";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-products-list",
  templateUrl: "./products-list.component.html",
  styleUrls: ["./products-list.component.scss"],
})
export class ProductsListComponent implements OnInit {
  products: IProduct[] = [];
  category: string;
  id: number;
  constructor(
    private _productService: ProductService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) {}

  ngOnInit() {
    console.log("_route", this._router);

    this.category = this._router.url;
    this._productService
      .getProducts(this.category)
      .subscribe((res) => (this.products = res));
  }
}
