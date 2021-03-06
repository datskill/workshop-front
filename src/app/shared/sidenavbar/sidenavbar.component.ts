import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { UserType } from 'src/app/enums/typeUserEnum';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css']
})
export class SidenavbarComponent implements OnInit, OnDestroy {

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  whichUser: string;
  UserType = UserType
  isLogged: boolean;
  subscription: Subscription;
  email: string
  constructor(public changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private authService: AuthService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    if (sessionStorage.getItem('logged') == 'true') {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    this.whichUser = sessionStorage.getItem('type');
    this.subscription = this.authService.listenerIsLogged.subscribe(value => {
      this.isLogged = value;
      this.whichUser = sessionStorage.getItem('type');
      if (sessionStorage.getItem('logged') === 'true') {
        this.isLogged = true;
        this.email = sessionStorage.getItem('name')

      } else {
        this.isLogged = false;
      }
    })
  }



  logout(): void {
    this.authService.logout();
    this.isLogged = false;
  }

  toggle(snav: any) {
    snav.toggle();
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    this.subscription.unsubscribe();
  }


}
