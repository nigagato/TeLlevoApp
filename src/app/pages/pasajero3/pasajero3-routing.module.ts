import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pasajero3Page } from './pasajero3.page';

const routes: Routes = [
  {
    path: '',
    component: Pasajero3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pasajero3PageRoutingModule {}
