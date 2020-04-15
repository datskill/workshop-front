import { Utilisateur } from './utilisateur';

export class Artisan implements Utilisateur {
    nom: string;
    prenom: string;
    email: string;
    password: string;
    adresse: string;
    ville: string;
    nomCommerce: string;
    numTel: string;
}