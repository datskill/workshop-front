import { Component, OnInit, Input } from '@angular/core';
import { Livraison } from 'src/app/models/livraison';
import { CommandeService } from 'src/app/services/commande.service';
import { MatDialog } from '@angular/material';
import { DialogLivraisonComponent } from 'src/app/shared/dialog-livraison/dialog-livraison.component';
import { DialogSupprComponent } from 'src/app/shared/dialog-suppr/dialog-suppr.component';

@Component({
  selector: 'app-livraison-artisan',
  templateUrl: './livraison-artisan.component.html',
  styleUrls: ['./livraison-artisan.component.css']
})
export class LivraisonArtisanComponent implements OnInit {

  newId: string;
  @Input() livraisonAttente: Livraison;
  constructor(private commandeService: CommandeService, public dialog: MatDialog) { }

  ngOnInit() {
    this.newId = this.livraisonAttente._id.substr(this.livraisonAttente._id.length - 6);
  }

  deleteDelivery() {
    const dialogRef = this.dialog.open(DialogSupprComponent, {
      width: '500px',
      data: { id: this.livraisonAttente._id }
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
