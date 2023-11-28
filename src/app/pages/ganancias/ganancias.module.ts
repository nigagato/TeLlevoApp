import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GananciasPageRoutingModule } from './ganancias-routing.module';

import { GananciasPage } from './ganancias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GananciasPageRoutingModule
  ],
  declarations: [GananciasPage]
})
export class GananciasPageModule {}
