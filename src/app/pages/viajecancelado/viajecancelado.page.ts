import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-viajecancelado',
  templateUrl: './viajecancelado.page.html',
  styleUrls: ['./viajecancelado.page.scss'],
})
export class ViajecanceladoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  menu(){
    this.router.navigate(['/menu'])
  }
}
