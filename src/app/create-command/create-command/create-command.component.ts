import { Component, OnInit } from '@angular/core';
import { Livraison } from 'src/app/models/livraison';
import { FormBuilder } from '@angular/forms';
import { CreateCommandeService } from 'src/app/services/create-commande.service';

@Component({
  selector: 'app-create-command',
  templateUrl: './create-command.component.html',
  styleUrls: ['./create-command.component.css']
})
export class CreateCommandComponent implements OnInit {

  livraison: Livraison = new Livraison();
  livraisonForm;
  constructor(private formBuilder: FormBuilder, private createCommandeService: CreateCommandeService) {
    this.livraisonForm = this.formBuilder.group({
      adresse: '',
      adresseRecupererCommande: '',
      nomCommerce: '',
      nomClient: '',
      numTelCommerce: '',
      numTelClient: '',
      weight: '',
    })
  }

  ngOnInit() {
    console.log(sessionStorage.getItem('user'));
  }

  onSubmit(): void {
    this.livraison.clientPhoneNumber = this.livraisonForm.value.numTelClient;
    this.livraison.collectionAdress = this.livraisonForm.value.adresseRecupererCommande;
    this.livraison.deliveryAddress = this.livraisonForm.value.adresse;
    this.livraison.idProducer = sessionStorage.getItem('user').toString();
    this.livraison.weight = this.livraisonForm.value.weight;
    this.createCommandeService.postCreateLivraison(this.livraison).subscribe(value => {
      console.log(value);
    })
  }

}
