import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isLogged || sessionStorage.getItem('logged') === 'true') {
      console.warn('toto');
      return true;
    }
    this.authService.redirectUrl = state.url;
    this.router.navigate(['/']);
    console.warn('tata');
    return false;
    // return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this.authService.isLogged) { return true; }

    this.authService.redirectUrl = url;


    this.router.navigate(['/login']);
  }

}
