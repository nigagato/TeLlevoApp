import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadotrayectosPageRoutingModule } from './listadotrayectos-routing.module';

import { ListadotrayectosPage } from './listadotrayectos.page';
import { ListadoviajesComponent } from 'src/app/components/listadoviajes/listadoviajes.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadotrayectosPageRoutingModule
  ],
  declarations: [ListadotrayectosPage,ListadoviajesComponent]
})
export class ListadotrayectosPageModule {}
