import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pasajero4',
  templateUrl: './pasajero4.page.html',
  styleUrls: ['./pasajero4.page.scss'],
})
export class Pasajero4Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
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
  pagar(){
    this.router.navigate(['/pagar'])
  }
  pasajero2(){
    this.router.navigate(['/pasajero2'])
  }
}
