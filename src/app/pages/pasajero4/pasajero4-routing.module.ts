import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pasajero4Page } from './pasajero4.page';

const routes: Routes = [
  {
    path: '',
    component: Pasajero4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pasajero4PageRoutingModule {}
