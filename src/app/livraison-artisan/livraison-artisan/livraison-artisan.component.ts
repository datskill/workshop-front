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
    this.newId = this.livraisonAttente._id.slice(0, 3);
  }

  deleteDelivery() {
    const dialogRef = this.dialog.open(DialogSupprComponent, {
      width: '500px',
      data: { id: this.livraisonAttente._id }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
    // this.commandeService.deleteDelivery(this.livraisonAttente._id).subscribe(value => {
    //   location.reload();
    // });
  }
}
