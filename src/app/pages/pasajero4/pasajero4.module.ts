import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pasajero4PageRoutingModule } from './pasajero4-routing.module';

import { Pasajero4Page } from './pasajero4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pasajero4PageRoutingModule
  ],
  declarations: [Pasajero4Page]
})
export class Pasajero4PageModule {}
