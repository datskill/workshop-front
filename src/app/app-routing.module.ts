import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ClientComponent } from './client/client/client.component';
import { SellerComponent } from './seller/seller/seller.component';
import { LoginComponent } from './login/login/login.component';
import { InscriptionComponent } from './inscription/inscription/inscription.component';
import { AuthGuard } from './services/auth.guard';
import { CreateCommandComponent } from './create-command/create-command/create-command.component';
import { CommandeDoneComponent } from './livraison-done/commande-done/commande-done.component';
import { AccueilComponent } from './accueil/accueil/accueil.component';
import { LivraisonEncourComponent } from './livraison-cours/livraison-encour/livraison-encour.component';


const routes: Routes = [

  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'inscription',
    component: InscriptionComponent
  },
  {
    path: 'create-command',
    component: CreateCommandComponent
  },
  {
    path: 'archive-commande',
    component: CommandeDoneComponent
  },
  {
    path: 'accueil',
    component: AccueilComponent
  },
  {
    path: 'livraison-en-cours',
    component: LivraisonEncourComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
