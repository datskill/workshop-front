import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged = false;
  listenerIsLogged = new BehaviorSubject<boolean>(this.isLogged);
  redirectUrl: string;
  constructor() { }

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(val => this.isLogged = true)
    );
  }

  eventChange() {
    this.listenerIsLogged.next(this.isLogged);
  }

  getValue() {
    this.eventChange();
  }

  logout() {
    this.isLogged = false;
    sessionStorage.clear();
  }


}
