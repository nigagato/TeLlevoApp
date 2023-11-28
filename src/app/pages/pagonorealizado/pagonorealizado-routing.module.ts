import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagonorealizadoPage } from './pagonorealizado.page';

const routes: Routes = [
  {
    path: '',
    component: PagonorealizadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagonorealizadoPageRoutingModule {}
