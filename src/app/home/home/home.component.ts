import { Component, OnInit, OnChanges } from '@angular/core';
import { Livraison } from 'src/app/models/livraison';
import { Producer } from 'src/app/models/producer';
import { Client } from 'src/app/models/client';
import { UserType } from 'src/app/enums/typeUserEnum';
import { Deliverer } from 'src/app/models/livreur';
import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  UserType = UserType;
  whoIsConnected: string;
  getIndexSelected: string;
  listeLivraison: Livraison[] = new Array<Livraison>();
  isListeFull: boolean = false;
  constructor(private commandeService: CommandeService) { }

  ngOnInit() {
    this.whoIsConnected = sessionStorage.getItem('type');
    this.commandeService.getAllDelivery().subscribe(value => {
      if (value) {
        value.forEach(element => {
          if (this.whoIsConnected === '1' && element.producer._id === sessionStorage.getItem('user')) {
            this.listeLivraison.push(element);
          } else if (this.whoIsConnected === '0') {
            this.listeLivraison.push(element);
          }
        });
      }
    });
    this.isListeFull = true;

  }

  getIndex(event) {
    this.getIndexSelected = event;
  }
  getLivraison(event: Livraison) {
    this.commandeService.updateDelivery(event).subscribe(value => {
      console.warn(value);
    })
  }
}
