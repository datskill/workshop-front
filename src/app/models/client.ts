import { Utilisateur } from './utilisateur';

export class Client implements Utilisateur {
    nom: string;
    prenom: string;
    adresse: string;
    ville: string;
    numTel: string;
}