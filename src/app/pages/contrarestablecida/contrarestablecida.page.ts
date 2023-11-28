import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contrarestablecida',
  templateUrl: './contrarestablecida.page.html',
  styleUrls: ['./contrarestablecida.page.scss'],
})
export class ContrarestablecidaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  login(){
    this.router.navigate(['/login'])
  }  
}
