import { Utilisateur } from './utilisateur';

export class Producer implements Utilisateur {
    _id?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    address?: string;
    city?: string;
    password?: string;
    phoneNumber?: string;
    companyName?: string;

}