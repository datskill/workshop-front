import { Component, OnInit } from '@angular/core';
import { Livraison } from 'src/app/models/livraison';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-command',
  templateUrl: './create-command.component.html',
  styleUrls: ['./create-command.component.css']
})
export class CreateCommandComponent implements OnInit {

  livraison: Livraison;
  livraisonForm;
  constructor(private formBuilder: FormBuilder, ) {
    this.livraisonForm = this.formBuilder.group({
      adresse: '',
      adresseRecupererCommande: '',
      nomCommerce: '',
      nomClient: '',
      numTelCommerce: '',
      numTelClient: '',
    })
  }

  ngOnInit() {
  }

  onSubmit(): void {
    this.livraison.artisan.adresse = this.livraisonForm.value.adresse;
    this.livraison.client.nom = this.livraisonForm.value.nomClient;
    this.livraison.artisan.adresse = this.livraisonForm.value.adresseRecupererCommande;
    this.livraison.artisan.numTel = this.livraisonForm.value.numTelCommerce;
    this.livraison.artisan.nomCommerce = this.livraisonForm.value.nomCommerce;
    this.livraison.client.numTel = this.livraisonForm.value.numTelClient;
  }
}
