import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import { ServicioFirebaseService } from 'src/app/services/servicio-firebase.service';
import { Usuario } from 'src/app/interface/usuario';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
 
})
export class RegistroPage implements OnInit {
  username: string = '';
  password: string = '';
  hide = true;

  constructor(
    private router: Router,
    private toastCtrl: ToastController,
    private servFire: ServicioFirebaseService
  ) {}

  ngOnInit() {}

  async mostrarMensajeError(mensaje: string) {
    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 3000,
      position: 'top',
      color: 'danger',
    });
    toast.present();
  }

  login() {
    this.router.navigate(['/login']);
  }

  async registrodatos() {
    if (!this.username || !this.password) {
      this.mostrarMensajeError('Por favor, complete todos los campos.');
      return;
    }

    // Verificar si el nombre de usuario ya existe
    const nombreUsuarioExistente = await this.servFire.buscarUsuarioPorNombreUnico(
      this.username
    );

    if (!nombreUsuarioExistente) {
      this.mostrarMensajeError('El nombre de usuario ya está en uso.');
      return;
    }

    console.log('Usuario ' + this.username);
    console.log('Password ' + this.password);
    const data = {
      usuario: this.username,
      password: this.password,
    };
    localStorage.setItem('usuario', JSON.stringify(data));
    this.router.navigate(['/registrocompleto']);
  }

  async grabarUsuario() {
    if (!this.username || !this.password) {
      this.mostrarMensajeError('Por favor, complete todos los campos.');
      return;
    }

    // Verificar si el nombre de usuario ya existe
    const nombreUsuarioExistente = await this.servFire.buscarUsuarioPorNombreUnico(
      this.username
    );

    if (!nombreUsuarioExistente) {
      // Si el nombre de usuario ya existe, mostrar un mensaje de error
      this.mostrarMensajeError('El nombre de usuario ya está en uso.');
      return;
    }

    // Si el nombre de usuario es único, continuar con el registro
    let mi_user: Usuario = {
      username: this.username,
      password: this.password,
    };

    console.log(mi_user);

    this.servFire.grabarUsuario(mi_user).then(() => {
      console.log('Usuario grabado');
    }).catch((e) => {
      console.log(e);
    }).finally(() => {
      this.router.navigate(['/registrocompleto']);
    });
  }
}