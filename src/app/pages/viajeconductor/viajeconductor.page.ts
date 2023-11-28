import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Viaje } from 'src/app/interface/viaje';
import { ToastController } from '@ionic/angular';
import { ServicioFirebaseService } from 'src/app/services/servicio-firebase.service';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-viajeconductor',
  templateUrl: './viajeconductor.page.html',
  styleUrls: ['./viajeconductor.page.scss'],
})
export class ViajeconductorPage implements OnInit {
  viaje: Viaje | undefined;
  viajes: Viaje[] = [];
  constructor(private router: Router,
    private afs: AngularFirestore,
    private toastCtrl: ToastController,
    private servFire:ServicioFirebaseService) { }

  ngOnInit() {
    // Recupera el viaje almacenado en el almacenamiento local
    const viajeStr = localStorage.getItem('viaje');
  
    if (viajeStr) {
      // Si se encuentra un viaje en el almacenamiento local, conviértelo en objeto
      this.viaje = JSON.parse(viajeStr);
    } else {
      console.error('No se encontró un viaje en el almacenamiento local.');
    }
  }
  async mostrarAlerta(mensaje: string) {
    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 3000, 
      position: 'middle', 
      color: 'success',
    });
    toast.present();
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
  conductor(){
    this.router.navigate(['/conductor'])
  }
  viajecancelado(){
    this.router.navigate(['/viajecancelado'])
  }
  finalizarViaje() {
    const choferId = localStorage.getItem('username'); // Obtener el ID del chofer del localStorage
  
    // Realiza una consulta para encontrar el viaje en curso del chofer
    this.afs.collection<Viaje>('viaje', (ref) =>
      ref.where('chofer_id', '==', choferId).where('estado', '==', 1)
    )
    .get()
    .pipe(first())
    .toPromise()
    .then((querySnapshot) => {
      if (!querySnapshot || querySnapshot.empty) {
        // No se encontraron viajes en curso para el chofer
        this.mostrarAlerta('No tienes un viaje en curso para finalizar.');
      } else {
        // Se encontró un viaje en curso, finalizarlo
        const viajeId = querySnapshot.docs[0].id;
        this.afs.collection<Viaje>('viaje').doc(viajeId).update({ estado: 0 })
          .then(() => {
            console.log('Viaje finalizado con éxito');
            this.mostrarAlerta('Viaje finalizado con éxito.');
            this.router.navigate(['/conductor'])
          })
          .catch((error) => {
            console.error('Error al finalizar el viaje', error);
            this.mostrarAlerta('Error al finalizar el viaje.');
          });
      }
    })
    .catch((error) => {
      // Manejar errores si ocurren
      console.error('Error al buscar el viaje en curso:', error);
    });
  }
  async cancelarViaje() {
    const choferId = localStorage.getItem('username'); // Obtener el ID del chofer del localStorage
  
    // Realiza una consulta para encontrar el viaje en curso del chofer
    this.afs.collection<Viaje>('viaje', (ref) =>
      ref.where('chofer_id', '==', choferId).where('estado', '==', 1)
    )
    .get()
    .pipe(first())
    .toPromise()
    .then((querySnapshot) => {
      if (!querySnapshot || querySnapshot.empty) {
        // No se encontraron viajes en curso para el chofer
        this.mostrarAlerta('No tienes un viaje en curso para cancelar.');
      } else {
        // Se encontró un viaje en curso, cancelarlo
        const viajeId = querySnapshot.docs[0].id;
        this.afs.collection<Viaje>('viaje').doc(viajeId).delete()
          .then(() => {
            console.log('Viaje cancelado con éxito');
            this.mostrarAlerta('Viaje cancelado con éxito.');
            this.router.navigate(['/conductor'])
          })
          .catch((error) => {
            console.error('Error al cancelar el viaje', error);
            this.mostrarAlerta('Error al cancelar el viaje.');
          });
      }
    })
    .catch((error) => {
      // Manejar errores si ocurren
      console.error('Error al buscar el viaje en curso:', error);
    });
  }
  
}
