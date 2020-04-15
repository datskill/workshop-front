import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TypeUtilisateur } from 'src/app/models/typeUtilisateur';
import { Utilisateur } from 'src/app/models/utilisateur';
import { Livreur } from 'src/app/models/livreur';
import { Artisan } from 'src/app/models/artisan';

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
  rayonKM: string;
  selected = '';
  constructor(private formBuilder: FormBuilder, ) {
    this.inscriptionForm = this.formBuilder.group({
      nom: '',
      prenom: '',
      email: '',
      password: '',
      numeroTel: '',
      adresse: '',
      ville: '',
      type: '',
      nomSociete: '',
    })
  }

  ngOnInit(): void { }

  getValue(event) {
    this.rayonKM = event
  }

  onSubmit(): void {
    this.inscriptionForm.value.type = this.selected;
    console.log(this.inscriptionForm.value.type);
    if (this.inscriptionForm.value.type === '0') {
      let livreur: Livreur = new Livreur();
      livreur.rayonLivraison = this.rayonKM;
      livreur.nom = this.inscriptionForm.value.nom;
      livreur.prenom = this.inscriptionForm.value.prenom;
      livreur.email = this.inscriptionForm.value.email;
      livreur.password = this.inscriptionForm.value.password;
      livreur.adresse = this.inscriptionForm.value.adresse;
      livreur.ville = this.inscriptionForm.value.ville;
      console.log(livreur);
      sessionStorage.setItem('type', '0');
      console.log(localStorage.getItem('type'));
      // Appel route Back Livreur
    } else {
      let artisan: Artisan = new Artisan();
      artisan.nom = this.inscriptionForm.value.nom;
      artisan.prenom = this.inscriptionForm.value.prenom;
      artisan.email = this.inscriptionForm.value.email;
      artisan.password = this.inscriptionForm.value.password;
      artisan.adresse = this.inscriptionForm.value.adresse;
      artisan.ville = this.inscriptionForm.value.ville;
      artisan.nomCommerce = this.inscriptionForm.value.nomSociete;
      console.log(artisan);
      // appel route back commercant
    }
  }
}
