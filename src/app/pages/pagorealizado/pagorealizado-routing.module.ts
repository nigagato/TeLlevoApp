import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagorealizadoPage } from './pagorealizado.page';

const routes: Routes = [
  {
    path: '',
    component: PagorealizadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagorealizadoPageRoutingModule {}
