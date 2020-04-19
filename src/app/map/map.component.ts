import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { CommandeService } from '../services/commande.service';
import { Livraison } from '../models/livraison';
import { Deliverer } from '../models/livreur';
import { DialogLivraisonComponent } from '../shared/dialog-livraison/dialog-livraison.component';
import { MatDialog } from '@angular/material';
import { GeocodeService } from '../services/geocode.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {

  constructor(private commandeService: CommandeService, public dialog: MatDialog, private geocode: GeocodeService) { }

  Deliveries = [];
  Adresses = [];
  lien: string;

  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;

  map: google.maps.Map;

  lat = 43.5956529;
  lng = 3.8838017;

  items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);

  coordinates = new google.maps.LatLng(this.lat, this.lng);

  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 8
  };

  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
  });

  getDeliveries() {
    this.commandeService.getAllDelivery().subscribe(data => {
      this.Deliveries = data.filter(x => x.isDelivered === false);
      this.Deliveries.forEach((item, index) => {

        this.Adresses.push(item.deliveryAddress);
      });
        console.log("Deliveries", this.Deliveries);
        console.log("Adresses", this.Adresses);
      })
    }

  livrerCommandeTermine(d: any): void {
      this.commandeService.updateDelivery(d).subscribe(data => {
        d.isDelivered = true;
      })
    this.getDeliveries();
    }

    getC(Adresses) {
      this.geocode.getAcoordinates(Adresses);
      console.log(this.geocode.getAcoordinates(Adresses));
    }
  ngAfterViewInit() {
      this.mapInitializer();
      this.getDeliveries();
    }

  valid() {}

  mapInitializer() {
      this.map = new google.maps.Map(this.gmap.nativeElement,
        this.mapOptions);
      this.marker.setMap(this.map);
    }
}