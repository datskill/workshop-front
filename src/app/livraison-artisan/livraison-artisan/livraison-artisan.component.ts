import { Component, OnInit, Input } from '@angular/core';
import { Livraison } from 'src/app/models/livraison';

@Component({
  selector: 'app-livraison-artisan',
  templateUrl: './livraison-artisan.component.html',
  styleUrls: ['./livraison-artisan.component.css']
})
export class LivraisonArtisanComponent implements OnInit {

  @Input() livraisonAttente: Livraison;
  constructor() { }

  ngOnInit() {
    console.warn('ytoto');
    console.warn(this.livraisonAttente);
  }

}
