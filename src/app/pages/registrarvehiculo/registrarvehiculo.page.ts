import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ServicioFirebaseService } from 'src/app/services/servicio-firebase.service';

import { Vehiculo } from 'src/app/interface/vehiculo';
@Component({
  selector: 'app-registrarvehiculo',
  templateUrl: './registrarvehiculo.page.html',
  styleUrls: ['./registrarvehiculo.page.scss'],
})
export class RegistrarvehiculoPage implements OnInit {
  patente:string='';
  modelo:string='';
  constructor(private router: Router,
    private toastCtrl: ToastController, 
    private servFire:ServicioFirebaseService){ }

  ngOnInit() {
  }
  servicios(){
    this.router.navigate(['/servicios'])
  }
  conductor(){
    this.router.navigate(['/conductor'])
  } 
  async grabarVehiculo() {
    const username = localStorage.getItem('username');
    if (!username) {
      console.error('Nombre de usuario no encontrado en el almacenamiento local.');
      return;
    }

    // Verificar si ya existe un vehículo para el usuario
    const vehiculoExistente = await this.servFire.buscarVehiculoPorChofer(username);

    if (vehiculoExistente) {
      console.error('El usuario ya tiene un vehículo registrado.');
      this.mostrarAlerta('No es posible agregar otro vehículo', 'Ya tiene un vehículo registrado.');
    } else {
      let mi_vehiculo: Vehiculo = {
        patente: this.patente,
        modelo: this.modelo,
        chofer_id: username, // Asigna el username como chofer_id
      };

      this.servFire.grabarVehiculo(mi_vehiculo).then(() => {
        console.log('Vehículo grabado');
        this.router.navigate(['/registrovehiculocompleto']);
      }).catch((e) => {
        console.log(e);
        this.mostrarAlerta('Error', 'No se pudo grabar el vehículo.');
      });
    }
  }

  async mostrarAlerta(titulo: string, mensaje: string) {
    const alert = await this.toastCtrl.create({
      header: titulo,
      message: mensaje,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
