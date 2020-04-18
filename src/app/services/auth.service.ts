import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { LoginService } from './login.service';
import { Authentification } from '../models/authentification';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged = false;
  listenerIsLogged = new BehaviorSubject<boolean>(this.isLogged);
  redirectUrl: string;
  constructor(private loginService: LoginService, private router: Router) {
    if ((this.redirectUrl && this.isLogged) || (this.redirectUrl && sessionStorage.getItem('logged') === 'true')) {
      this.router.navigate([this.redirectUrl]);
    }
  }

  login(authent: Authentification): any {
    return this.loginService.postLogin(authent);
  }

  eventChange() {
    this.listenerIsLogged.next(this.isLogged);
  }

  getValue() {
    this.eventChange();
  }

  logout() {
    this.isLogged = false;
    this.getValue();
    sessionStorage.clear();
    this.router.navigate(['/login'])
  }


}
