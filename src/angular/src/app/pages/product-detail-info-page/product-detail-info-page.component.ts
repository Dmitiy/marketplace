import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail-info-page',
  templateUrl: './product-detail-info-page.component.html',
  styleUrls: ['./product-detail-info-page.component.scss'],
})
export class ProductDetailInfoPageComponent implements OnInit {
  images: any[];
  productName: string;
  category: string;
  categoryItemID: number;
  titleItem: string;
  deliveryItem: string;
  currencyItem: string;
  descTitleItem: string[] | string;
  numIdItem: number;
  priceItem: number;
  countItem: number;
  hasValueItem: boolean;
  constructor(
    private _route: ActivatedRoute,
    private _productService: ProductService
  ) { }

  ngOnInit() {
    this.category = this._route.snapshot.params.category;
    this.categoryItemID = this._route.snapshot.params.id;

    this._productService
      .getProduct(this.category, this.categoryItemID)
      .subscribe(r => {
        console.log(r);

        this.titleItem = r.title;
        this.deliveryItem = r.delivery;
        this.currencyItem = r.currency;
        this.numIdItem = r.numId;
        this.priceItem = r.price;
        this.countItem = r.count;
        this.descTitleItem = r.description;
        this.hasValueItem = r.hasValue;
      });

    this.images = [];
    this.images.push({ source: './assets/img/gallery/ch-g-big.png', alt: 'Description for Image 1', title: 'Title 1' });
    this.images.push({ source: 'https://secretmebel.ru/image/cache/catalog/%20%D1%82%D0%B5%D1%82%D1%87%D0%B5%D1%80/Rotang/Papasan/IMG_9942_500_500-600x600.jpg', alt: 'Description for Image 2', title: 'Title 2' });
    this.images.push({ source: './assets/img/gallery/ch-g-big.png', alt: 'Description for Image 3', title: 'Title 3' });
    this.images.push({ source: 'https://via.placeholder.com/360x430', alt: 'Description for Image 4', title: 'Title 4' });
  }

  increment() {
    this.countItem++;
  }
  decrement() {
    if (this.countItem <= 0) {
      return
    }
    this.countItem--;
  }
}
