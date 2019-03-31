import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.scss'],
})
export class DetailItemComponent implements OnInit {
  images: any[];

  constructor() { }

  ngOnInit() {
    this.images = [];
    this.images.push({ source: './assets/img/gallery/ch-g-big.png', alt: 'Description for Image 1', title: 'Title 1' });
    this.images.push({ source: 'https://via.placeholder.com/360x430', alt: 'Description for Image 1', title: 'Title 1' });
    this.images.push({ source: './assets/img/gallery/ch-g-big.png', alt: 'Description for Image 1', title: 'Title 1' });
    this.images.push({ source: 'https://via.placeholder.com/360x430', alt: 'Description for Image 1', title: 'Title 1' });
  }
}
