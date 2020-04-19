import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TypeUtilisateur } from 'src/app/models/typeUtilisateur';
import { Utilisateur } from 'src/app/models/utilisateur';
import { Deliverer } from 'src/app/models/livreur';
import { Producer } from 'src/app/models/producer';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { InscriptionService } from 'src/app/services/inscription.service';

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
  constructor(private formBuilder: FormBuilder, public router: Router, private httpClient: HttpClient,
    private inscriptionService: InscriptionService) {
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

  onSubmit(formValue: any): void {
    // Appel route Back Livreur
    this.inscriptionForm.value.type = this.selected;
    if (this.inscriptionForm.value.type === '0') {
      let livreur: Deliverer = new Deliverer();
      livreur.deliveryArea = this.rayonKM;
      livreur.lastName = this.inscriptionForm.value.nom;
      livreur.firstName = this.inscriptionForm.value.prenom;
      livreur.email = this.inscriptionForm.value.email;
      livreur.password = this.inscriptionForm.value.password;
      livreur.address = this.inscriptionForm.value.adresse;
      livreur.city = this.inscriptionForm.value.ville;
      livreur.phoneNumber = this.inscriptionForm.value.numeroTel;
      this.inscriptionService.postInscription(livreur).subscribe(value => {
      })


    } else {
      let artisan: Producer = new Producer();
      artisan.lastName = this.inscriptionForm.value.nom;
      artisan.firstName = this.inscriptionForm.value.prenom;
      artisan.email = this.inscriptionForm.value.email;
      artisan.password = this.inscriptionForm.value.password;
      artisan.address = this.inscriptionForm.value.adresse;
      artisan.city = this.inscriptionForm.value.ville;
      artisan.companyName = this.inscriptionForm.value.nomSociete;
      artisan.phoneNumber = this.inscriptionForm.value.numeroTel;
      // appel route back commercant
      this.inscriptionService.postInscriptionProducer(artisan).subscribe(value => {
      })
    }
    this.router.navigate(['/login']);
  }
}
