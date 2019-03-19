import { Product } from 'src/app/models/Product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.scss']
})
export class DetailItemComponent implements OnInit {
  product: Product[];
  constructor(private _productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this._productService.getProducts(id)
      .subscribe(product => this.product = product);
  }
}
