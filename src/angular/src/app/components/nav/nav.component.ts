import { Component, OnInit } from '@angular/core';
import { Nav } from 'src/app/models/Nav';
import { NAVS } from 'src/app/models/mock-nav';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  private _navs: Nav[] = [];

  public _products: Product[] = [];

  constructor(
    private _productService: ProductService,
    private _router: Router,
  ) {}

  ngOnInit() {
    this.getNavs();
  }

  getNavs() {
    return (this._navs = NAVS);
  }
  // onSelect(link) {
  //   this._productService
  //     .getProducts(this._router.url)
  //     .subscribe((res) => (this._products = res));
  // }
}
