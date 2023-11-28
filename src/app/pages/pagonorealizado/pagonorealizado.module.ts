import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagonorealizadoPageRoutingModule } from './pagonorealizado-routing.module';

import { PagonorealizadoPage } from './pagonorealizado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagonorealizadoPageRoutingModule
  ],
  declarations: [PagonorealizadoPage]
})
export class PagonorealizadoPageModule {}
