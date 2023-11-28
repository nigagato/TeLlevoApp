import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevacontra',
  templateUrl: './nuevacontra.page.html',
  styleUrls: ['./nuevacontra.page.scss'],
})
export class NuevacontraPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  rescontracod(){
    this.router.navigate(['/rescontracod'])
  }
  contrarestablecida(){
    this.router.navigate(['/contrarestablecida'])
  }
}
