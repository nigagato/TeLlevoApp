import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarvehiculoPageRoutingModule } from './registrarvehiculo-routing.module';

import { RegistrarvehiculoPage } from './registrarvehiculo.page';


import { ModuloModule } from 'src/app/modulo/modulo.module';
import { ModuloMaterialModule } from 'src/app/modulo/modulo-material/modulo-material.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarvehiculoPageRoutingModule,
    ModuloModule,
    ModuloMaterialModule
  ],
  declarations: [RegistrarvehiculoPage]
})
export class RegistrarvehiculoPageModule {}
