import { Component, OnInit, NgZone } from '@angular/core';
import * as L from "leaflet";

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  constructor(private ngZone: NgZone) { }

  ngOnInit() {
    this.loadLeafletMap();
    this.getCurrentLocation();
  }

  leafletMap: any;
  lat: number = 41.1533;
  lng: number = 20.1683;
  zoom: number = 8;

  loadLeafletMap() {
    console.log('cargado');
    this.leafletMap = new L.Map('mapId');
    this.leafletMap.setView([this.lat, this.lng], this.zoom);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.leafletMap);
  }

  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.ngZone.run(() => {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          this.leafletMap.setView([this.lat, this.lng], this.zoom);
        });
      }, (error) => {
        console.error('Error getting geolocation:', error);
      });
    } else {
      console.error('Geolocation not supported by your browser.');
    }
  }
}
