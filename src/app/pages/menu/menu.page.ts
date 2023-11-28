import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioFirebaseService } from 'src/app/services/servicio-firebase.service';
import { ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Viaje } from 'src/app/interface/viaje';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  usuario: string = '';
  viajes: Viaje[] = []; 
  constructor(private router: Router, 
              private toastCtrl: ToastController, 
              private servFire:ServicioFirebaseService,
              private afs: AngularFirestore) { }

  ngOnInit() {
    const username = localStorage.getItem('username');
    
    if (username) {
      this.usuario = username;
    }
    this.getViajes();
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
  conductor(){
    this.router.navigate(['/conductor'])
  }
  direccion(){
    this.router.navigate(['/direccion'])
  }
  recuperar(){
    this.servFire.getViajes();
  }
  getViajes() {
    this.afs.collection('viaje').valueChanges().subscribe(
      (res: any) => {
        this.viajes = res as Viaje[]; 
      }
    );
  }
}
