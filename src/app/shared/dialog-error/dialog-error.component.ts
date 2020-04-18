import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogLivraisonComponent } from '../dialog-livraison/dialog-livraison.component';
import { Livraison } from 'src/app/models/livraison';

@Component({
  selector: 'app-dialog-error',
  templateUrl: './dialog-error.component.html',
  styleUrls: ['./dialog-error.component.css']
})
export class DialogErrorComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogLivraisonComponent>,
    @Inject(MAT_DIALOG_DATA) public data: null) { }


  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
