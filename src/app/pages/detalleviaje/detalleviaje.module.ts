import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleviajePageRoutingModule } from './detalleviaje-routing.module';

import { DetalleviajePage } from './detalleviaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleviajePageRoutingModule
  ],
  declarations: [DetalleviajePage]
})
export class DetalleviajePageModule {}
