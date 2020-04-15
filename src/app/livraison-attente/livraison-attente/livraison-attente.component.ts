import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Livraison } from 'src/app/models/livraison';
import { MatDialog } from '@angular/material';
import { DialogLivraisonComponent } from 'src/app/shared/dialog-livraison/dialog-livraison.component';
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

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  livrerCommande(): void {
    this.emitIndex.emit(this.index);
    this.livraisonAttente.enAttenteLivreur = false;
    this.emitLivraison.emit(this.livraisonAttente);
    const dialogRef = this.dialog.open(DialogLivraisonComponent, {
      width: '250px',
      data: { name: this.livraisonAttente.id, estLivre: false }
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  livrerCommandeTermine(): void {
    this.emitIndex.emit(this.index);
    this.livraisonAttente.estLivre = true;
    this.emitLivraison.emit(this.livraisonAttente);
    const dialogRef = this.dialog.open(DialogLivraisonComponent, {
      width: '250px',
      data: { name: this.livraisonAttente.id, estLivre: true }
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
