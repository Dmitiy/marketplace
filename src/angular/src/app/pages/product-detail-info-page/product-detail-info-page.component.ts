import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail-info-page',
  templateUrl: './product-detail-info-page.component.html',
  styleUrls: ['./product-detail-info-page.component.scss'],
})
export class ProductDetailInfoPageComponent implements OnInit {
  images: any[];

  constructor(
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.snapshot.params['category'];

    this.images = [];
    this.images.push({ source: './assets/img/gallery/ch-g-big.png', alt: 'Description for Image 1', title: 'Title 1' });
    this.images.push({ source: 'https://via.placeholder.com/360x430', alt: 'Description for Image 2', title: 'Title 2' });
    this.images.push({ source: './assets/img/gallery/ch-g-big.png', alt: 'Description for Image 3', title: 'Title 3' });
    this.images.push({ source: 'https://via.placeholder.com/360x430', alt: 'Description for Image 4', title: 'Title 4' });
  }
}
