import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _productsUrl = 'http://localhost:3004';

  constructor(private _http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(this._productsUrl + '/chairs');
  }

  getChairs(): Observable<Product[]> {
    return this._http.get<Product[]>(this._productsUrl + '/chairs');
  }
  getBeds(): Observable<Product[]> {
    return this._http.get<Product[]>(this._productsUrl + '/beds');
  }
  getCupboards(): Observable<Product[]> {
    return this._http.get<Product[]>(this._productsUrl + '/cupboards');
  }
  getKitchens(): Observable<Product[]> {
    return this._http.get<Product[]>(this._productsUrl + '/kitchens');
  }
  getHouseholds(): Observable<Product[]> {
    return this._http.get<Product[]>(this._productsUrl + '/households');
  }
}
