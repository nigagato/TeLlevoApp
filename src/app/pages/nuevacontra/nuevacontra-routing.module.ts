import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevacontraPage } from './nuevacontra.page';

const routes: Routes = [
  {
    path: '',
    component: NuevacontraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevacontraPageRoutingModule {}
