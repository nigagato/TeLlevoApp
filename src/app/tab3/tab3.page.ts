import { Component } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  constructor() {}

  lngFin:number=0;
  latFin:number=0;

  ir() {
    var duoc = [-70.57902808465514, -33.59778231829415];
    var map = new mapboxgl.Map({
      accessToken: environment.apiMB,
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',     
      center: [duoc[0], duoc[1]],
      zoom: 13,
    });
    
    var startPoint = [-74.5, 40]; // Coordenadas del punto de inicio
    var endPoint = [-74.45, 40.1]; // Coordenadas del punto de destino

    startPoint = duoc;
    endPoint = [this.lngFin,this.latFin];
    console.log(endPoint);
    var marker = new mapboxgl.Marker().setLngLat([duoc[0], duoc[1]]).addTo(map);
    var marker2 = new mapboxgl.Marker().setLngLat([endPoint[0], endPoint[1]]).addTo(map);
    // Utiliza la API de direcciones para obtener la ruta entre los dos puntos
    fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${startPoint[0]},${startPoint[1]};${endPoint[0]},${endPoint[1]}?steps=true&geometries=geojson&access_token=${environment.apiMB}`
    )
      .then((response) => response.json())
      .then((data) => {
        var route = data.routes[0].geometry;

        // Añade la ruta al mapa
        map.on('load', function () {
          map.addLayer({
            id: 'route',
            type: 'line',
            source: {
              type: 'geojson',
              data: {
                type: 'Feature',
                properties: {},
                geometry: route,
              },
            },
            layout: {
              'line-join': 'round',
              'line-cap': 'round',
            },
            paint: {
              'line-color': '#3887be',
              'line-width': 5,
              'line-opacity': 0.75,
            },
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  direccion:string='';

  buscar(){
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.direccion}.json?access_token=${environment.apiMB}`
    )
      .then((response) => response.json())
      .then((data) => {
        var route = data;
        

        console.log(route["features"]);    
        var largo= route["features"].length;
        console.log(largo);
        if (largo>0) {
          this.lngFin=route["features"][0]["center"][0];
          this.latFin=route["features"][0]["center"][1];
        }
        for (let index = 0; index < route["features"].length; index++) {
          const element = route["features"][index]["place_name"];
          console.log(element);
          const lng=route["features"][index]["center"][0];
          const lat=route["features"][index]["center"][1];
          console.log((index+1)+") Lng:"+lng+" Lat:"+lat);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
