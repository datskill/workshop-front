import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Livraison } from 'src/app/models/livraison';
import { MatDialog } from '@angular/material';
import { DialogLivraisonComponent } from 'src/app/shared/dialog-livraison/dialog-livraison.component';
import { Deliverer } from 'src/app/models/livreur';
import { InscriptionService } from 'src/app/services/inscription.service';
import { CommandeService } from 'src/app/services/commande.service';
@Component({
  selector: 'app-livraison-attente',
  templateUrl: './livraison-attente.component.html',
  styleUrls: ['./livraison-attente.component.css']
})
export class LivraisonAttenteComponent implements OnInit {
  @Input() livraisonAttente: Livraison;
  @Output() emitIndex = new EventEmitter<string>();
  @Output() emitLivraison = new EventEmitter<Livraison>();
  @Input() index: string;
  tempLivreur: Deliverer = new Deliverer();
  newId: string;

  constructor(public dialog: MatDialog, private inscriptionService: InscriptionService, private commandeService: CommandeService) { }

  ngOnInit() {
    this.inscriptionService.getDeliverer(sessionStorage.getItem('user')).subscribe(value => {
      if (value) {
        this.tempLivreur = value;
      }
    });
    this.newId = this.livraisonAttente._id.slice(0, 3);
  }

  livrerCommande(): void {
    this.emitIndex.emit(this.index);
    this.livraisonAttente.isPending = false;
    this.livraisonAttente.deliverer = new Deliverer();
    this.livraisonAttente.deliverer = this.tempLivreur;
    this.emitLivraison.emit(this.livraisonAttente);
    const dialogRef = this.dialog.open(DialogLivraisonComponent, {
      width: '500px',
      data: { name: this.newId, estLivre: false }
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  livrerCommandeTermine(): void {
    this.emitIndex.emit(this.index);
    this.livraisonAttente.isDelivered = true;
    this.emitLivraison.emit(this.livraisonAttente);
    // const dialogRef = this.dialog.open(DialogLivraisonComponent, {
    //   width: '500px',
    //   data: { name: this.newId, estLivre: true }
    // });
    // dialogRef.afterClosed().subscribe(result => {
    // });
  }
}
