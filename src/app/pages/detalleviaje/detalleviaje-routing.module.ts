import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleviajePage } from './detalleviaje.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleviajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleviajePageRoutingModule {}
