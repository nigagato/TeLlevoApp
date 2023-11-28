import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage implements OnInit {
  usuario: string = ''; 
  constructor(private router: Router) { }

  ngOnInit() {
    
    const username = localStorage.getItem('username');
    
    if (username) {
      
      this.usuario = username;
    }
  }
  login(){
    this.router.navigate(['/login'])
  }
  cuenta(){
    this.router.navigate(['/cuenta'])
  }
  casasede(){
    this.router.navigate(['/casasede'])
  }
}
