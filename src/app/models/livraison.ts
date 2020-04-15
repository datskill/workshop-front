import { Livreur } from './livreur';
import { Artisan } from './artisan';
import { Client } from './client';

export class Livraison {
    id: string;
    enAttenteLivreur: boolean;
    estLivre: boolean;
    livreur?: Livreur;
    artisan: Artisan;
    client: Client;
}