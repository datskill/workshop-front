import { Injectable } from '@angular/core';


@Injectable()
export class GeocodeService {
  private urlApi = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
  key= "AIzaSyATnt4fS9vrw-PsjJxF3d-9Z0nPArYNHy8"
  constructor() {}


  getAcoordinates(adress: any) {
    console.log("adress", adress);
    return this.urlApi + adress +"&key="+ this.key;
    
  }
}