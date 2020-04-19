import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Livraison } from 'src/app/models/livraison';

@Component({
  selector: 'app-dialog-livraison',
  templateUrl: './dialog-livraison.component.html',
  styleUrls: ['./dialog-livraison.component.css']
})
export class DialogLivraisonComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogLivraisonComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
