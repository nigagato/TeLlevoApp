import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContrarestablecidaPageRoutingModule } from './contrarestablecida-routing.module';

import { ContrarestablecidaPage } from './contrarestablecida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContrarestablecidaPageRoutingModule
  ],
  declarations: [ContrarestablecidaPage]
})
export class ContrarestablecidaPageModule {}
