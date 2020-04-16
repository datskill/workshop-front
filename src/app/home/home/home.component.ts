import { Component, OnInit, OnChanges } from '@angular/core';
import { Livraison } from 'src/app/models/livraison';
import { Artisan } from 'src/app/models/artisan';
import { Client } from 'src/app/models/client';
import { UserType } from 'src/app/enums/typeUserEnum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  artisan: Artisan = {
    adresse: 'Rue des bavières',
    email: 'boucherie@suarez',
    nom: 'Luis Suarez',
    nomCommerce: 'Suarez Boucherie',
    numTel: '0987654567',
    password: 'azertyuio',
    prenom: "luis",
    ville: "nimes"
  }
  client: Client = {
    adresse: '512 Rue des pommiers',
    nom: 'Machette',
    prenom: 'Lorenzo',
    ville: 'Nimes',
    numTel: '09876543'
  }
  UserType = UserType;
  whoIsConnected: string;
  listLivraisons: Livraison[] = [
    //TODO : Recuperer via le Back
    {
      id: '1',
      enAttenteLivreur: true, estLivre: false, artisan: this.artisan, client: this.client
    },
    {
      id: '2', enAttenteLivreur: true, estLivre: false, artisan: this.artisan, client: this.client
    }
  ]
  getIndexSelected: string;
  constructor() { }

  ngOnInit() {
    this.whoIsConnected = sessionStorage.getItem('type');
    console.log(this.whoIsConnected);
    // pas oublier de clear le storage à la deconnexion
  }

  getIndex(event) {
    this.getIndexSelected = event;
  }
  getLivraison(event: Livraison) {
    this.listLivraisons[this.getIndexSelected] = event;
    //todo : Appel Back pour update les livraisons
  }
}
