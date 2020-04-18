import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Livraison } from '../models/livraison';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  private urlApi = 'http://localhost:3000/deliveries/';
  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache'
  });
  options = {
    headers: this.httpHeaders
  };
  listeLivraison: Livraison[] = new Array<Livraison>();
  livraison: Livraison = new Livraison();
  constructor(private httpClient: HttpClient) { }

  getAllDelivery() {
    return this.httpClient.get<Livraison[]>(this.urlApi);
  }

  getOneDeliver(id: string) {
    return this.httpClient.get<Livraison>(this.urlApi + ':' + id);

  }
  updateDelivery(delivery: Livraison) {
    return this.httpClient.put<Livraison>(this.urlApi + delivery._id, delivery);
  }
  deleteDelivery(id: string) {
    return this.httpClient.delete<Livraison>(this.urlApi + id);
  }
}
