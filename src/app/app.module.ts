import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login/login.component';
import { HomeComponent } from './home/home/home.component';
import { SellerComponent } from './seller/seller/seller.component';
import { ClientComponent } from './client/client/client.component';
import { SelectAutocompleteModule } from 'mat-select-autocomplete';
import {
  MatToolbarModule,
  MatCardModule,
  MatCheckboxModule,
  MatListModule,
  MatTableModule,
  MatGridListModule,
  MatSnackBarModule,
  MatPaginatorModule,
  MatSortModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatTooltipModule,

} from '@angular/material';

@NgModule({
  exports: [
    MatPaginatorModule,
    MatToolbarModule,
    MatCardModule,
    MatCheckboxModule,
    MatListModule,
    MatTableModule,
    MatGridListModule,
    MatSnackBarModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatAutocompleteModule,
    SelectAutocompleteModule,
    MatButtonModule,
    MatTooltipModule,
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SellerComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
