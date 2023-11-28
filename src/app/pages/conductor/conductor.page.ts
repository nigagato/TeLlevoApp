import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
})
export class ConductorPage implements OnInit {

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
  registrarvehiculo(){
    this.router.navigate(['/registrarvehiculo'])
  }
  pasajero2(){
    this.router.navigate(['/pasajero2'])
  }
  viajeconductor(){
    this.router.navigate(['/viajeconductor'])
  }
}
