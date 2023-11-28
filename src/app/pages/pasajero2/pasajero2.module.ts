import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pasajero2PageRoutingModule } from './pasajero2-routing.module';

import { Pasajero2Page } from './pasajero2.page';
import { ModuloMaterialModule } from 'src/app/modulo/modulo-material/modulo-material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pasajero2PageRoutingModule,
    ModuloMaterialModule
  ],
  declarations: [Pasajero2Page]
})
export class Pasajero2PageModule {}