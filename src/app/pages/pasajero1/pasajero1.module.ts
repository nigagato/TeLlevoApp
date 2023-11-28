import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pasajero1PageRoutingModule } from './pasajero1-routing.module';

import { Pasajero1Page } from './pasajero1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pasajero1PageRoutingModule
  ],
  declarations: [Pasajero1Page]
})
export class Pasajero1PageModule {}
