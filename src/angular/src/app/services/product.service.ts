import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
// };

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _URL: string = 'http://localhost:3000';

  constructor(private _http: HttpClient) {}

  getProducts(link: string): Observable<Product[]> {
    return this._http.get<Product[]>(`${this._URL}${link}`);
  }

  getProduct(link: string, id: string): Observable<Product> {
    return this._http.get<Product>(`${this._URL}${link}/${id}`);
  }
}
