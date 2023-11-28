import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {
  usuario: string = ''; // Variable para almacenar el nombre de usuario
  constructor(private router: Router) { }

  ngOnInit() {
    // Recuperar el nombre de usuario desde LocalStorage
    const username = localStorage.getItem('username');
    
    if (username) {
      // Si se encontró un nombre de usuario, asignarlo a la variable "usuario"
      this.usuario = username;
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
  config(){
    this.router.navigate(['/configuracion'])
  }
  ganancias(){
    this.router.navigate(['/ganancias'])
  }
  listadotrayectos(){
    this.router.navigate(['/listadotrayectos'])
  }
}
