import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pagonorealizado',
  templateUrl: './pagonorealizado.page.html',
  styleUrls: ['./pagonorealizado.page.scss'],
})
export class PagonorealizadoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  menu(){
    this.router.navigate(['/menu'])
  }
}

