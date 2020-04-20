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
  isListeEmpy: boolean = false;
  constructor(private commandeService: CommandeService) { }

  ngOnInit() {
    this.whoIsConnected = sessionStorage.getItem('type');
    this.commandeService.getAllDelivery().subscribe(value => {
      const tempList = new Array<Livraison>();
      if (value) {
        console.warn(value);
        value.forEach(element => {
          if (this.whoIsConnected === '1' && element.producer._id === sessionStorage.getItem('user')) {
            tempList.push(element);
            // this.listeLivraison.forEach(item => {
            //   item.deliverer = new Deliverer();
            //   item.deliverer = element.deliverer;
            // });
          } else if (this.whoIsConnected === '0') {
            tempList.push(element);
          }
        });
      }
      this.listeLivraison = tempList;
      if (this.listeLivraison.length === 0) {
        this.isListeEmpy = true;
      }
    });
    console.warn(this.listeLivraison);
    this.isListeFull = true;

  }

  getIndex(event) {
    this.getIndexSelected = event;
  }
  getLivraison(event: Livraison) {
    this.commandeService.updateDelivery(event).subscribe(value => {
    })
  }
}
