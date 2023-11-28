import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioFirebaseService } from 'src/app/services/servicio-firebase.service';
import { Viaje } from 'src/app/interface/viaje';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ganancias',
  templateUrl: './ganancias.page.html',
  styleUrls: ['./ganancias.page.scss'],
})
export class GananciasPage implements OnInit {
  sumaDeValores: number = 0;
  viajes: Viaje[] = [];
  usuario: string = '';
  constructor(private router: Router, private servFire: ServicioFirebaseService) {}

  ngOnInit() {
    const username = localStorage.getItem('username');
    if (username) {
      // Si se encontró un nombre de usuario, asignarlo a la variable "usuario"
      this.usuario = username;
    }
    this.obtenerMontosViajes();
  }

  cuenta() {
    this.router.navigate(['/cuenta']);
  }

  obtenerMontosViajes() {
    const username = localStorage.getItem('username'); // Obtener el username del localStorage
    if (username) {
      this.servFire.getMontosViajes().subscribe((viajes: Viaje[]) => {
        this.viajes = viajes;
        this.sumaDeValores = this.calcularSumaDeMontos(viajes, username);
      });
    }
  }

  calcularSumaDeMontos(viajes: Viaje[], username: string): number {
    let suma = 0;
    for (const viaje of viajes) {
      if (viaje.chofer_id === username) {
        suma += viaje.valor; // Asumiendo que el campo se llama "monto"
      }
    }
    return suma;
  }
}
