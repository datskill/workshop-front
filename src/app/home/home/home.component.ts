import { Component, OnInit, OnChanges } from '@angular/core';
import { Livraison } from 'src/app/models/livraison';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listLivraisons: Livraison[] = [
    //TODO : Recuperer via le Back
    {
      id: '1', adresse: '736 chemin des justices vieilles', adresseRecupererCommande: 'Centre Ville',
      nomCommerce: 'Boulangerie Villiere', enAttenteLivreur: true, estLivre: false, nomClient: 'Thomas',
      numTelClient: '0680208707', numTelCommerce: '0680208607'
    },
    {
      id: '2', adresse: '135 Route d\'Uzes', adresseRecupererCommande: 'Centre Ville', nomCommerce: 'Boucherie Villiere', enAttenteLivreur: true, estLivre: false
      , nomClient: 'Thomas',
      numTelClient: '0680208707', numTelCommerce: '0680208607'
    }
  ]
  getIndexSelected: string;
  constructor() { }

  ngOnInit() {
  }

  getIndex(event) {
    this.getIndexSelected = event;
  }
  getLivraison(event: Livraison) {
    this.listLivraisons[this.getIndexSelected] = event;
    //todo : Appel Back pour update les livraisons
  }
}
