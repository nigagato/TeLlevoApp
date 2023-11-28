import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrocompleto',
  templateUrl: './registrocompleto.page.html',
  styleUrls: ['./registrocompleto.page.scss'],
})
export class RegistrocompletoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  login(){
    this.router.navigate(['/login'])
  }
}
