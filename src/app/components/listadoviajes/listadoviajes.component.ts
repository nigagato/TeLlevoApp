import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listadoviajes',
  templateUrl: './listadoviajes.component.html',
  styleUrls: ['./listadoviajes.component.scss'],
})
export class ListadoviajesComponent  implements OnInit {
  @Input() direccion_inicio: string='';
  @Input() direccion_final: string='';
  @Input() total: string='';

  constructor() { }

  ngOnInit() {}

}
