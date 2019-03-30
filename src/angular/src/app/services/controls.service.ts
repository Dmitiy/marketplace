import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ControlsService {
  public count: number = 1;

  constructor() {}

  decrement(): void {
    if (this.count <= 1) {
      return;
    }
    this.count--;
  }

  increment(): void {
    this.count++;
  }
}
