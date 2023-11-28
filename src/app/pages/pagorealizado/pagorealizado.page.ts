import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagorealizado',
  templateUrl: './pagorealizado.page.html',
  styleUrls: ['./pagorealizado.page.scss'],
})
export class PagorealizadoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  menu(){
    this.router.navigate(['/menu'])
  }
}
