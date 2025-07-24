import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApplicationStateService {
  private showStartAppNav = new BehaviorSubject<boolean>(false);
  startAppNavVisible$ = this.showStartAppNav.asObservable();

  showNav() {
    this.showStartAppNav.next(true);
  }

  hideNav() {
    this.showStartAppNav.next(false);
  }
}
