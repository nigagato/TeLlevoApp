import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pasajero3PageRoutingModule } from './pasajero3-routing.module';

import { Pasajero3Page } from './pasajero3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pasajero3PageRoutingModule
  ],
  declarations: [Pasajero3Page]
})
export class Pasajero3PageModule {}
