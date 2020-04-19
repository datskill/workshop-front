import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-dialog-suppr',
  templateUrl: './dialog-suppr.component.html',
  styleUrls: ['./dialog-suppr.component.css']
})
export class DialogSupprComponent implements OnInit {

  constructor(private commandeService: CommandeService, public dialogRef: MatDialogRef<DialogSupprComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private router: Router) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  suppr(): void {
    this.commandeService.deleteDelivery(this.data.id).subscribe(value => {
      this.router.navigate(['/accueil']);
    });
  }

}
