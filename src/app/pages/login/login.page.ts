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
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  //arreglo=[];
  //arr=new Array();
  //usuario:string='';
  hide = true;
  username:string="";
  password:string="";
  constructor(private router: Router,
              private toastCtrl: ToastController, 
              private servFire:ServicioFirebaseService) { }

  ngOnInit() {
  }
  async mostrarAlerta(mensaje: string) {
    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 3000, 
      position: 'bottom', 
    });
    toast.present();
  }

  menu(){
    const inputUsername = this.username;
    const inputPassword = this.password;

    this.servFire
      .buscarUsuarioPorNombre(inputUsername, inputPassword)
      .then((usuario) => {
        if (usuario !== null) {
          console.log('Usuario ingresado:', inputUsername);
          localStorage.setItem('username', inputUsername);
          this.router.navigate(['/menu']);
          
        } else {
          this.mostrarAlerta('Credenciales incorrectas');
        }
      })
      .catch((error) => {
        console.error('Error al buscar el usuario:', error);
      });
  }
  registro(){
    this.router.navigate(['/registro'])
  }
  rescontracod(){
    this.router.navigate(['/rescontracod'])
  }
  
}
