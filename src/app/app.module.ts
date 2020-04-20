import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

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
  MatSidenavModule,
  MatInput,
  MatDialogModule,
  MatSliderModule,

} from '@angular/material';
import { InscriptionComponent } from './inscription/inscription/inscription.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LivraisonAttenteComponent } from './livraison-attente/livraison-attente/livraison-attente.component';
import { DialogLivraisonComponent } from './shared/dialog-livraison/dialog-livraison.component';
import { CreateCommandComponent } from './create-command/create-command/create-command.component';
import { SliderKmComponent } from './shared/slider-km/slider-km.component';
import { LivraisonArtisanComponent } from './livraison-artisan/livraison-artisan/livraison-artisan.component';
import { SidenavbarComponent } from './shared/sidenavbar/sidenavbar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GlobalErrorHandler } from './services/global-error.service';
import { ServerErrorInterceptor } from './services/error-server.service';
import { CommandeDoneComponent } from './livraison-done/commande-done/commande-done.component';
import { DialogSupprComponent } from './shared/dialog-suppr/dialog-suppr.component';
import { AccueilComponent } from './accueil/accueil/accueil.component';
import { LivraisonCoursComponent } from './livraison-cours/livraison-cours.component';
import { LivraisonEncourComponent } from './livraison-cours/livraison-encour/livraison-encour.component';

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
    MatSidenavModule,
    MatInputModule,
    DialogLivraisonComponent,
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SellerComponent,
    ClientComponent,
    InscriptionComponent,
    LivraisonAttenteComponent,
    DialogLivraisonComponent,
    CreateCommandComponent,
    SliderKmComponent,
    LivraisonArtisanComponent,
    SidenavbarComponent,
    CommandeDoneComponent,
    DialogSupprComponent,
    AccueilComponent,
    LivraisonCoursComponent,
    LivraisonEncourComponent,

  ],
  entryComponents: [
    DialogLivraisonComponent,
    DialogSupprComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule,
    MatSliderModule,
    MatSnackBarModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule
  ],
  providers: [{ provide: ErrorHandler, useClass: GlobalErrorHandler },
  { provide: HTTP_INTERCEPTORS, useClass: ServerErrorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
