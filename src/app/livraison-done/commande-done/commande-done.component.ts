import { Component, OnInit } from '@angular/core';
import { UserType } from 'src/app/enums/typeUserEnum';
import { Livraison } from 'src/app/models/livraison';
import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-commande-done',
  templateUrl: './commande-done.component.html',
  styleUrls: ['./commande-done.component.css']
})
export class CommandeDoneComponent implements OnInit {


  listeLivraison: Livraison[] = new Array<Livraison>();
  isListeFull: boolean = false;
  constructor(private commandeService: CommandeService) { }

  ngOnInit() {
    this.commandeService.getAllDelivery().subscribe(value => {
      if (value) {
        value.forEach(element => {
          if (element.isDelivered) {
            this.listeLivraison.push(element);
          }
        });
      }
    });
    this.isListeFull = true;

  }
}
