import { Utilisateur } from './utilisateur';

export class Livreur implements Utilisateur {
    nom: string;
    prenom: string;
    email: string;
    password: string;
    adresse: string;
    rayonLivraison: string;
    numTel: string;
    ville: string;

}