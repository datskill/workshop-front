import { TypeUtilisateur } from './typeUtilisateur';

export class Utilisateur {
    nom: string;
    prenom: string;
    email: string;
    password: string;
    adresse: string;
    rayonLivraison?: string;
    ville: string;
}