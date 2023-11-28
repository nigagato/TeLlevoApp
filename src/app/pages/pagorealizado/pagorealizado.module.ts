import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagorealizadoPageRoutingModule } from './pagorealizado-routing.module';

import { PagorealizadoPage } from './pagorealizado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagorealizadoPageRoutingModule
  ],
  declarations: [PagorealizadoPage]
})
export class PagorealizadoPageModule {}
