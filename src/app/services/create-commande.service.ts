import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Livraison } from '../models/livraison';

@Injectable({
  providedIn: 'root'
})
export class CreateCommandeService {

  constructor(private httpClient: HttpClient) { }

  private urlApi = 'http://localhost:3000/login';
  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache'
  });
  options = {
    headers: this.httpHeaders
  };

  postData(obj: Livraison) {
    this.httpClient.post<Livraison>(this.urlApi, obj, this.options).subscribe(value => {
      if (value) { console.log('appel ok') } else { console.log("appek ko") }
    });
  }
}
