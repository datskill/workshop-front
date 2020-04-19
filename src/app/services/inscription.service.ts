import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Deliverer } from '../models/livreur';
import { Producer } from '../models/producer';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  constructor(private httpClient: HttpClient) { }

  private urlApiDeliverer = 'http://ns334507.ip-5-196-65.eu:3000/deliverers/';
  private urlApiProducer = 'http://ns334507.ip-5-196-65.eu:3000/producers/';

  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
  });
  options = {
    headers: this.httpHeaders
  };
  postInscription(obj: Deliverer) {
    return this.httpClient.post<Deliverer>(this.urlApiDeliverer, obj, this.options);
  }

  postInscriptionProducer(obj: Producer) {
    return this.httpClient.post<Producer>(this.urlApiProducer, obj, this.options);

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
