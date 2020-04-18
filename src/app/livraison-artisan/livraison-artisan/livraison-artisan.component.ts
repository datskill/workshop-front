import { Component, OnInit, Input } from '@angular/core';
import { Livraison } from 'src/app/models/livraison';
import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-livraison-artisan',
  templateUrl: './livraison-artisan.component.html',
  styleUrls: ['./livraison-artisan.component.css']
})
export class LivraisonArtisanComponent implements OnInit {

  newId: string;
  @Input() livraisonAttente: Livraison;
  constructor(private commandeService: CommandeService) { }

  ngOnInit() {
    this.newId = this.livraisonAttente._id.slice(0, 3);
  }

  deleteDelivery() {
    this.commandeService.deleteDelivery(this.livraisonAttente._id).subscribe(value => {
      location.reload();
    });
  }
}
