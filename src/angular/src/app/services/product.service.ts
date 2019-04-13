import { Injectable } from "@angular/core";
import { IProduct } from "../models/Product";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
// };

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private _URL: string = "http://localhost:3000";

  constructor(private _http: HttpClient) { }

  getProducts(link: string): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(`${this._URL}${link}`);
  }
}
