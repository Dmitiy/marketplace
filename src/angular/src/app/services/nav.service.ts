import { Nav } from './../models/Nav';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
// };

@Injectable({
  providedIn: 'root',
})
export class NavService {
  private _URL = 'http://localhost:3004';

  constructor(private _http: HttpClient) {}

  getNavs(): Observable<Nav[]> {
    return this._http.get<Nav[]>(this._URL);
  }
}
