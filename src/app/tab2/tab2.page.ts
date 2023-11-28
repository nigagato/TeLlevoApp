import { Component,OnInit } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  constructor() {}
  //lat:-33.598175523620775,lng:-70.579071
  

  ngOnInit(): void {
    this.uno()
  }

  uno() {
    //////////////////////////////////////////////////////////
    let lng=   -70.579071;
    let lat=  -33.598175523620775;
    lat=-33.628349;
    lng=-70.539583;
    const map = new mapboxgl.Map({
      accessToken:environment.apiMB,
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [lng, lat], // starting position [lng, lat]
      zoom: 15, // starting zoom
    });
    /////////////////////////////////////////////////////////
    const marcador=new mapboxgl.Marker().setLngLat([lng,lat]).addTo(map);

  }
  dos(){

    // buscar direccion por Lng y Lat
    //https://api.mapbox.com/directions/v5/mapbox/cycling/-122.42,37.78;-77.03,38.91?access_token=pk.eyJ1IjoiZnJlZGNhbXBvczEyMzAiLCJhIjoiY2xudTl2d2VrMDlpbzJrcWpnYnJkc3JqbCJ9.hjid1kkpkU37wvVJrj2pQg
    // buscar direccion por Texto
    //https://api.mapbox.com/geocoding/v5/mapbox.places/el%20lago%20puyehue pirque.json?access_token=pk.eyJ1IjoiZnJlZGNhbXBvczEyMzAiLCJhIjoiY2xudTl2d2VrMDlpbzJrcWpnYnJkc3JqbCJ9.hjid1kkpkU37wvVJrj2pQg

  }
  
}


/**
 * ionic cordova plugin add cordova-plugin-geolocation
*  npm install @ionic-native/geolocation

import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-tu-pagina',
  templateUrl: 'tu-pagina.page.html',
  styleUrls: ['tu-pagina.page.scss'],
})
export class TuPagina {

  constructor(private geolocation: Geolocation) {}

  obtenerGeolocalizacion() {
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude y resp.coords.longitude contienen las coordenadas
      console.log('Latitud: ' + resp.coords.latitude);
      console.log('Longitud: ' + resp.coords.longitude);
    }).catch((error) => {
      console.error('Error al obtener la geolocalización', error);
    });
  }
}

import { Geolocation } from '@ionic-native/geolocation/ngx';

// ...

@NgModule({
  declarations: [
    // ...
  ],
  imports: [
    // ...
  ],
  providers: [
    Geolocation,
    // ...
  ],
})
export class TuModulo { }

 */