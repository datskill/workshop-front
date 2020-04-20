import { Component, OnInit } from '@angular/core';
import { CommandeService } from 'src/app/services/commande.service';
import { Livraison } from 'src/app/models/livraison';

@Component({
  selector: 'app-livraison-encour',
  templateUrl: './livraison-encour.component.html',
  styleUrls: ['./livraison-encour.component.css']
})
export class LivraisonEncourComponent implements OnInit {

  constructor(private commandeService: CommandeService) { }

  listeLivraison: Livraison[] = new Array<Livraison>();
  getIndexSelected;
  ngOnInit() {
    this.commandeService.getAllDelivery().subscribe(value => {
      const tempList = new Array<Livraison>();
      if (value) {
        value.forEach(element => {
          tempList.push(element);
        });
      }
      this.listeLivraison = tempList;
    });
  }

  getLivraison(event: Livraison) {
    this.commandeService.updateDelivery(event).subscribe(value => {
    })
  }
  getIndex(event) {
    this.getIndexSelected = event;
  }

}
