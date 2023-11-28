import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrovehiculocompleto',
  templateUrl: './registrovehiculocompleto.page.html',
  styleUrls: ['./registrovehiculocompleto.page.scss'],
})
export class RegistrovehiculocompletoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  conductor(){
    this.router.navigate(['/conductor'])
  }
}
