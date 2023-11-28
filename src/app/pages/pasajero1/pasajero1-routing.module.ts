import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pasajero1Page } from './pasajero1.page';

const routes: Routes = [
  {
    path: '',
    component: Pasajero1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pasajero1PageRoutingModule {}
