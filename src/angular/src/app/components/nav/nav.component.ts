import { Component, OnInit } from '@angular/core';
import { Nav } from 'src/app/models/Nav';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NAVS } from 'src/app/models/mock-nav';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  private _navs: Nav[] = [];
  private _URL = 'http://localhost:3004';

  private _products: Product[] = [];

  private _chairs: Product[] = [];
  private _beds: Product[] = [];
  private _cupboards: Product[] = [];
  private _kitchens: Product[] = [];
  private _households: Product[] = [];

  constructor(private _http: HttpClient) {}

  ngOnInit() {
    this.getNavs();
  }

  getNavs() {
    return (this._navs = NAVS);
  }

  onSelect(nav) {
    this._http.get(this._URL + nav.linkTo).subscribe((res: Product[]) => {
      console.log(res);
      this._products = res;
    });
  }
}
