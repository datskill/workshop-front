import { Deliverer } from './livreur';
import { Producer } from './producer';

export class Livraison {
    _id?: string;
    isPending?: boolean;
    isDelivered?: boolean;
    weight?: string;
    collectionAdress?: string;
    idProducer?: string;
    idDeliverer?: string;
    clientName?: string;
    clientPhoneNumber?: string;
    deliveryAddress?: string;
    producer?: Producer;
    deliverer?: Deliverer;
    createdAt?: string;
    updatedAt?: string;
}