import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { LocalStoreService } from 'src/app/services/local-store.service';

@Component({
  selector: 'app-product-item-big',
  templateUrl: './product-item-big.component.html',
  styleUrls: ['./product-item-big.component.scss']
})
export class ProductItemBigComponent implements OnInit {
  @Input() category: string;
  constructor(
    public productService: ProductService,
    public localStoreService: LocalStoreService
  ) { }

  ngOnInit() {
  }

}
