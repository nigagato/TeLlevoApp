import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasasedePageRoutingModule } from './casasede-routing.module';

import { CasasedePage } from './casasede.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasasedePageRoutingModule
  ],
  declarations: [CasasedePage]
})
export class CasasedePageModule {}
