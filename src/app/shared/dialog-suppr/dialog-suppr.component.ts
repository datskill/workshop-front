import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogLivraisonComponent } from '../dialog-livraison/dialog-livraison.component';
import { CommandeService } from 'src/app/services/commande.service';
import { Livraison } from 'src/app/models/livraison';

@Component({
  selector: 'app-dialog-suppr',
  templateUrl: './dialog-suppr.component.html',
  styleUrls: ['./dialog-suppr.component.css']
})
export class DialogSupprComponent implements OnInit {

  constructor(private commandeService: CommandeService, public dialogRef: MatDialogRef<DialogSupprComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  suppr(): void {
    this.commandeService.deleteDelivery(this.data.id).subscribe(value => {
      location.reload();
    });
  }

}
