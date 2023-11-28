import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ServicioFirebaseService } from 'src/app/services/servicio-firebase.service';
import { Viaje } from 'src/app/interface/viaje';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viajeusuario',
  templateUrl: './viajeusuario.page.html',
  styleUrls: ['./viajeusuario.page.scss'],
})
export class ViajeusuarioPage implements OnInit {
  viaje: Viaje | undefined;
  viajes: Viaje[] = [];
  constructor(private router: Router,
  private toastCtrl: ToastController, 
  private servFire:ServicioFirebaseService,
  private activatedRoute: ActivatedRoute
  ){
    this.activatedRoute.params.subscribe((params) => {
      if (params && params['viaje']) {
        this.viaje = JSON.parse(params['viaje']);
      }
    });           
  
  }

  async ngOnInit() {
    // Recupera el viaje almacenado en el localstorage
    const viajeStr = localStorage.getItem('viaje');
  
    if (viajeStr) {
      // Si se encuentra un viaje en el localstorage, lo hace objeto
      this.viaje = JSON.parse(viajeStr);
    } else {
      console.error('No se encontró un viaje en el almacenamiento local.');
    }
  }
  
  
  menu(){
    this.router.navigate(['/menu'])
  }
  cuenta(){
    this.router.navigate(['/cuenta'])
  }
  servicios(){
    this.router.navigate(['/servicios'])
  }
  pasajero1(){
    this.router.navigate(['/pasajero1'])
  }
  viajecancelado(){
    this.router.navigate(['/viajecancelado'])
  }
  
  eliminar() {
    const username = localStorage.getItem('username');
    if (username) {
      this.servFire.eliminarViajesPorPasajeroId(username).then(() => {
        console.log('Viajes eliminados correctamente');
        this.router.navigate(['/pasajero1'])
      }).catch((error) => {
        console.error('Error al eliminar los viajes:', error);
      });
    } else {
      console.error('Nombre de usuario no encontrado en el almacenamiento local.');
    }
  }
}
