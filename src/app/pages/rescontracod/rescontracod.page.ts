import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rescontracod',
  templateUrl: './rescontracod.page.html',
  styleUrls: ['./rescontracod.page.scss'],
})
export class RescontracodPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  login(){
    this.router.navigate(['/login'])
  }
  nuevacontra(){
    this.router.navigate(['/nuevacontra'])
  }
}
