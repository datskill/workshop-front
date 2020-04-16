import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Livreur } from '../models/livreur';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  constructor(private httpClient: HttpClient) { }

  private urlApi = 'http://localhost:3000/users';
  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache'
  });
  options = {
    headers: this.httpHeaders
  };

  postData(obj: Livreur) {
    this.httpClient.post<Livreur>(this.urlApi, obj, this.options).subscribe(value => {
      if (value) { console.log('appel ok') } else { console.log("appek ko") }
    });
  }
}
