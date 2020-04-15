import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TypeUtilisateur } from 'src/app/models/typeUtilisateur';
import { Utilisateur } from 'src/app/models/utilisateur';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  inscriptionForm;
  listUsers: TypeUtilisateur[] = [
    { nom: 'Livreur', value: '0' },
    { nom: 'Producteur/Artisan', value: '1' }
  ]
  utilisateur: Utilisateur;
  rayonKM: string;
  selected = '';
  constructor(private formBuilder: FormBuilder, ) {
    this.inscriptionForm = this.formBuilder.group({
      nom: '',
      prenom: '',
      email: '',
      password: '',
      adresse: '',
      ville: '',
      type: ''
    })
  }

  ngOnInit(): void { }

  getValue(event) {
    this.rayonKM = event
  }

  onSubmit(): void {
    this.inscriptionForm.value.type = this.selected;
    if (this.inscriptionForm.value.type === 0) {
      this.utilisateur.rayonLivraison = this.rayonKM;
      this.utilisateur.nom = this.inscriptionForm.value.nom
      this.utilisateur.prenom = this.inscriptionForm.value.prenom
      this.utilisateur.email = this.inscriptionForm.value.email
      this.utilisateur.password = this.inscriptionForm.value.password
      this.utilisateur.adresse = this.inscriptionForm.value.adresse
      this.utilisateur.ville = this.inscriptionForm.value.ville
      // Appel route Back Livreur
    } else {
      this.utilisateur.nom = this.inscriptionForm.value.nom
      this.utilisateur.prenom = this.inscriptionForm.value.prenom
      this.utilisateur.email = this.inscriptionForm.value.email
      this.utilisateur.password = this.inscriptionForm.value.password
      this.utilisateur.adresse = this.inscriptionForm.value.adresse
      this.utilisateur.ville = this.inscriptionForm.value.ville
      // appel route back commercant
    }
  }
}
