import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../../services/product.service';
import { NAVS } from '../../../../models/mock-nav';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  category: string;
  categoryItemID: any;
  categoryName: string;
  productName: string;
  constructor(
    public route: ActivatedRoute,
    private _productService: ProductService
  ) { }

  ngOnInit() {
    this.category = this.route.snapshot.params.category;
    this.categoryName = NAVS.filter(nav => nav.linkTo === this.category)[0].name;
    this.categoryItemID = this.route.snapshot.params.id;

    this._productService
      .getProduct(this.category, this.categoryItemID)
      .subscribe(r => {
        this.productName = r.title;
      });
  }
}
