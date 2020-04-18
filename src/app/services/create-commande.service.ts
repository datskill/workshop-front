import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Livraison } from '../models/livraison';

@Injectable({
  providedIn: 'root'
})
export class CreateCommandeService {

  constructor(private httpClient: HttpClient) { }

  private urlApi = 'http://localhost:3000/deliveries/';
  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache'
  });
  options = {
    headers: this.httpHeaders
  };

  postCreateLivraison(obj: Livraison) {
    return this.httpClient.post<Livraison>(this.urlApi, obj, this.options);
  }
}
