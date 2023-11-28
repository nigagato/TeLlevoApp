import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrovehiculocompletoPage } from './registrovehiculocompleto.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrovehiculocompletoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrovehiculocompletoPageRoutingModule {}
