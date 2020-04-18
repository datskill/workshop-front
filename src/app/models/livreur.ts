import { Utilisateur } from './utilisateur';

export class Deliverer implements Utilisateur {
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    city: string;
    deliveryArea: string;
    phoneNumber: string;
    password: string;

}