import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViajecanceladoPageRoutingModule } from './viajecancelado-routing.module';

import { ViajecanceladoPage } from './viajecancelado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViajecanceladoPageRoutingModule
  ],
  declarations: [ViajecanceladoPage]
})
export class ViajecanceladoPageModule {}
