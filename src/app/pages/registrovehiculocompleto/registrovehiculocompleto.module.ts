import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrovehiculocompletoPageRoutingModule } from './registrovehiculocompleto-routing.module';

import { RegistrovehiculocompletoPage } from './registrovehiculocompleto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrovehiculocompletoPageRoutingModule
  ],
  declarations: [RegistrovehiculocompletoPage]
})
export class RegistrovehiculocompletoPageModule {}
