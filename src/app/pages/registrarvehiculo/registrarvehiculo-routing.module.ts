import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarvehiculoPage } from './registrarvehiculo.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarvehiculoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarvehiculoPageRoutingModule {}
