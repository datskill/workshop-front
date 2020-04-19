import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Livraison } from '../models/livraison';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  private urlApi = 'http://ns334507.ip-5-196-65.eu:3000/deliveries/';
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
}
