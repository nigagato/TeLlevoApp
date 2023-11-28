import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioFirebaseService } from 'src/app/services/servicio-firebase.service';
import { Viaje } from 'src/app/interface/viaje';
import { ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-listadotrayectos',
  templateUrl: './listadotrayectos.page.html',
  styleUrls: ['./listadotrayectos.page.scss'],
})
export class ListadotrayectosPage implements OnInit {
  viajes: Viaje[] = []; 
  constructor(private router: Router, 
              private toastCtrl: ToastController, 
              private servFire:ServicioFirebaseService,
              private afs: AngularFirestore) { }

  ngOnInit() {
    this.getViajes();
  }
  cuenta(){
    this.router.navigate(['/cuenta'])
  }
  recuperar(){
    this.servFire.getViajes();
  }
  getViajes() {
    const username = localStorage.getItem('username');
    if (username) {
      this.afs.collection('viaje', (ref) => 
        ref.where('pasajero_id', '==', username).where('estado', '==', 0)
      ).valueChanges().subscribe(
        (res: any) => {
          this.viajes = res as Viaje[];
        }
      );
    } else {
      console.error('Nombre de usuario no encontrado en el almacenamiento local.');
    }
  }
}

