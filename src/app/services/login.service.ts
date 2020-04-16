import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Authentification } from '../models/authentification';
import { Utilisateur } from '../models/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  utilisateur: HttpResponse<Utilisateur>;
  private urlApi = 'http://localhost:3000/login';
  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache'
  });
  options = {
    headers: this.httpHeaders
  };

  postData(obj: Authentification) {
    this.httpClient.post<Authentification>(this.urlApi, obj, this.options).subscribe(value => {

    });
  }
}
