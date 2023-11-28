import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as L from "leaflet";

@Component({
  selector: 'app-casasede',
  templateUrl: './casasede.page.html',
  styleUrls: ['./casasede.page.scss'],
})
export class CasasedePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.loadLeafletMap()
  }
  configuracion(){
    this.router.navigate(['/configuracion'])
  }
  leafletMap: any;

  zoom: number = 8;

  loadLeafletMap() {
    console.log('cargado');
    this.leafletMap = new L.Map('mapId');
    this.leafletMap.setView([-33.6107, -70.5746], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.leafletMap);
    var redicon = L.icon({
      iconUrl: 'assets/img/png.png',
      iconSize: [35,30],
  });
    L.marker([-33.6107, -70.5746], {icon: redicon}).addTo(this.leafletMap)
      .bindPopup('Estas aquí.')
      .openPopup();
  }

}
