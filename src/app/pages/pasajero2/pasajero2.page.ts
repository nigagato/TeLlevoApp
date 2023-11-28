import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ServicioFirebaseService } from 'src/app/services/servicio-firebase.service';
import { Viaje } from 'src/app/interface/viaje';

import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pasajero2',
  templateUrl: './pasajero2.page.html',
  styleUrls: ['./pasajero2.page.scss'],
})
export class Pasajero2Page implements OnInit {
  valor: number = 0;
  direccion: string = '';
  lngFin: number = 0;
  latFin: number = 0;

  constructor(
    private router: Router,
    private toastCtrl: ToastController,
    private servFire: ServicioFirebaseService
  ) {}

  ngOnInit() {
  }

  menu() {
    this.router.navigate(['/menu']);
  }

  cuenta() {
    this.router.navigate(['/cuenta']);
  }

  servicios() {
    this.router.navigate(['/servicios']);
  }

  conductor() {
    this.router.navigate(['/conductor']);
  }

  pasajero4() {
    this.router.navigate(['/pasajero4']);
  }

  grabarViaje() {
    const usuario = localStorage.getItem('username');

    if (usuario !== null) {
      this.servFire.obtenerIdViajeEnCurso(usuario).then((idViajeEnCurso) => {
        if (idViajeEnCurso) {
          this.mostrarAlerta(
            'Alerta',
            'No puedes crear un nuevo viaje porque ya tienes uno en curso.'
          );
        } else {
          this.servFire
            .buscarVehiculoPorChofer(usuario)
            .then((vehiculo) => {
              if (vehiculo) {
                const direccionInicial = localStorage.getItem('direccionGuardada')|| '';
                let mi_viaje: Viaje = {
                  direccion_inicial: direccionInicial,
                  direccion_final: 'Duoc UC Puente Alto',
                  valor: this.valor,
                  chofer_id: usuario,
                  pasajero_id: '',
                  estado: 1,
                  patente: vehiculo.patente,
                };
                
                localStorage.setItem('viaje', JSON.stringify(mi_viaje));
                this.servFire
                  .grabarViaje(mi_viaje)
                  .then(() => {
                    console.log('Viaje grabado');
                  })
                  .catch((e) => {
                    console.log(e);
                  })
                  .finally(() => {
                    this.router.navigate(['/viajeconductor']);
                  });
              } else {
                this.mostrarAlerta(
                  'Alerta',
                  'No tienes un vehículo registrado, no puedes crear un viaje.'
                );
              }
            });
        }
      });
    } else {
      console.log('El valor de "username" en el localStorage es null.');
    }
  }

  async mostrarAlerta(titulo: string, mensaje: string) {
    const alert = await this.toastCtrl.create({
      header: titulo,
      message: mensaje,
      position: 'top',
      buttons: ['OK'],
    });

    await alert.present();
  }

  ir() {
    var duoc = [-70.57902808465514, -33.59778231829415];
    var map = new mapboxgl.Map({
      accessToken: environment.apiMB,
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [duoc[0], duoc[1]],
      zoom: 13,
    });

    var startPoint = duoc;
    var endPoint = [this.lngFin, this.latFin];

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

  buscar() {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.direccion}.json?access_token=${environment.apiMB}`
    )
      .then((response) => response.json())
      .then((data) => {
        var route = data;

        console.log(route['features']);
        var largo = route['features'].length;
        console.log(largo);
        if (largo > 0) {
          this.lngFin = route['features'][0]['center'][0];
          this.latFin = route['features'][0]['center'][1];

          // Guardar la dirección en el localStorage
          const direccionCompleta = route['features'][0]['place_name'];
          localStorage.setItem('direccionGuardada', direccionCompleta);
        }
        for (let index = 0; index < route['features'].length; index++) {
          const element = route['features'][index]['place_name'];
          console.log(element);
          const lng = route['features'][index]['center'][0];
          const lat = route['features'][index]['center'][1];
          console.log((index + 1) + ') Lng:' + lng + ' Lat:' + lat);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
