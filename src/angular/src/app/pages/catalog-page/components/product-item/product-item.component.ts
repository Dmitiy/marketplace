import { Component, OnInit, Input } from "@angular/core";
import { IProduct } from "../../../../models/Product";
import { ProductService } from "src/app/services/product.service";
import { LocalStoreService } from 'src/app/services/local-store.service';
import { ControlsService } from 'src/app/services/controls.service';

@Component({
  selector: "app-product-item",
  templateUrl: "./product-item.component.html",
  styleUrls: ["./product-item.component.scss"],
})
export class ProductItemComponent implements OnInit {
  @Input() product: IProduct[];
  @Input() category: string;

  constructor(
    public productService: ProductService,
    public controlsService: ControlsService,
    public localStoreService: LocalStoreService
  ) { }

  ngOnInit() { }

  addToCart(product: IProduct) {
    event.preventDefault();
    event.stopPropagation();
    this.localStoreService.updateLocalStorage(product);
    this.controlsService.hasValueCart = !this.controlsService.hasValueCart;
    setTimeout(() => {
      this.controlsService.hasValueCart = false;

    }, 400)
  }
}
