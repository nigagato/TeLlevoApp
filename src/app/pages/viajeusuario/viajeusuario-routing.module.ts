import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViajeusuarioPage } from './viajeusuario.page';

const routes: Routes = [
  {
    path: '',
    component: ViajeusuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViajeusuarioPageRoutingModule {}
