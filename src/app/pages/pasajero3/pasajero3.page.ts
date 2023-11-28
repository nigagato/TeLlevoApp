import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ServicioFirebaseService } from 'src/app/services/servicio-firebase.service';
import { Viaje } from 'src/app/interface/viaje';

@Component({
  selector: 'app-pasajero3',
  templateUrl: './pasajero3.page.html',
  styleUrls: ['./pasajero3.page.scss'],
})
export class Pasajero3Page implements OnInit {
  viajes: Viaje[] = [];

  constructor(private router: Router, 
              private toastCtrl: ToastController, 
              private servFire: ServicioFirebaseService) { }

  ngOnInit() {
    this.getViajesEnCursoSinPasajero();
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

  pasajero1() {
    this.router.navigate(['/pasajero1']);
  }

  pasajero4() {
    this.router.navigate(['/pasajero4']);
  }

  viajeusuario(viaje: Viaje) {
    this.router.navigate(['/viajeusuario', { viaje: JSON.stringify(viaje) }]);
  }
  async unirseAViaje(viaje: Viaje) {
    const usuario = localStorage.getItem('username');
  
    if (usuario !== null) {
      const viajeEnCurso = await this.servFire.obtenerViajeEnCursoParaPasajero(usuario);
  
      if (viajeEnCurso) {
        this.mostrarAlerta('Alerta', 'No puedes unirte a este viaje porque ya estás en uno en curso.');
      } else if (viaje.pasajero_id) {
        this.mostrarAlerta('Alerta', 'No puedes unirte a este viaje porque ya tiene un pasajero.');
      } else {

        viaje.pasajero_id = usuario;

        localStorage.setItem('viaje', JSON.stringify(viaje));
        
        await this.servFire.actualizarPasajeroEnViajes(usuario, viaje.direccion_inicial, viaje.direccion_final, viaje.chofer_id);
        
        this.router.navigate(['/viajeusuario']);
      }
    } else {
      console.log('El valor de "username" en el localStorage es null.');
    }
  }
  
  
  async getViajesEnCursoSinPasajero() {
    try {
      const viajes = await this.servFire.getViajesEnCursoSinPasajero();
  
      if (viajes) {
        this.viajes = viajes;
      } else {
        this.viajes = [];
        console.log('No se encontraron viajes en curso sin pasajero.');
        this.mostrarAlerta('No hay viajes disponibles', 'Intente más tarde.');
      }
    } catch (error) {
      console.error('Error al obtener los viajes en curso:', error);
    }
  }
  async mostrarAlerta(titulo: string, mensaje: string) {
    const alert = await this.toastCtrl.create({
      header: titulo,
      message: mensaje,
      buttons: ['OK'],
      position: 'middle', 
    });
    await alert.present();
  } 
  
}
