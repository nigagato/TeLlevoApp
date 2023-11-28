import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViajeusuarioPageRoutingModule } from './viajeusuario-routing.module';

import { ViajeusuarioPage } from './viajeusuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViajeusuarioPageRoutingModule
  ],
  declarations: [ViajeusuarioPage]
})
export class ViajeusuarioPageModule {}
