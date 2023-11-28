import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pasajero2Page } from './pasajero2.page';

const routes: Routes = [
  {
    path: '',
    component: Pasajero2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pasajero2PageRoutingModule {}
