import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ControlsService {
  public isOpen: boolean = false;

  constructor() { }

  decrement(count): void {
    if (count <= 0) {
      return;
    }
    count--;
  }

  increment(count): void {
    count++;
  }

  isOpenMenu() {
    this.isOpen = !this.isOpen;
  }
}
