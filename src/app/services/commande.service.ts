import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Livraison } from '../models/livraison';
import { Deliverer } from '../models/livreur';
import { Producer } from '../models/producer';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  private urlApi = 'http://ns334507.ip-5-196-65.eu:3000/deliveries/';
  private urlApiDeliverer = 'http://ns334507.ip-5-196-65.eu:3000/deliverers/';
  private urlApiProducer = 'http://ns334507.ip-5-196-65.eu:3000/producers/';
  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    'Authorization': `Bearer ${sessionStorage.getItem('token')}`
  });
  options = {
    headers: this.httpHeaders
  };
  listeLivraison: Livraison[] = new Array<Livraison>();
  livraison: Livraison = new Livraison();
  constructor(private httpClient: HttpClient) { }

  getAllDelivery() {
    return this.httpClient.get<Livraison[]>(this.urlApi, this.options);
  }

  getOneDeliver(id: string) {
    return this.httpClient.get<Livraison>(this.urlApi + id, this.options);

  }
  updateDelivery(delivery: Livraison) {
    return this.httpClient.put<Livraison>(this.urlApi + delivery._id, delivery, this.options);
  }
  deleteDelivery(id: string) {
    return this.httpClient.delete<Livraison>(this.urlApi + id, this.options);
  }
  getAllDeliverer() {
    return this.httpClient.get<Deliverer[]>(this.urlApiDeliverer, this.options);
  }
  getDeliverer(id: string) {
    return this.httpClient.get<Deliverer>(this.urlApiDeliverer + id, this.options);
  }
  getProducer(id: string) {
    return this.httpClient.get<Producer>(this.urlApiProducer + id, this.options);
  }
  getAllProducer() {
    return this.httpClient.get<Deliverer[]>(this.urlApiProducer, this.options);
  }
}
