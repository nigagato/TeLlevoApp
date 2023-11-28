import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrocompletoPageRoutingModule } from './registrocompleto-routing.module';

import { RegistrocompletoPage } from './registrocompleto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrocompletoPageRoutingModule
  ],
  declarations: [RegistrocompletoPage]
})
export class RegistrocompletoPageModule {}
