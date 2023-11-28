import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GananciasPage } from './ganancias.page';

const routes: Routes = [
  {
    path: '',
    component: GananciasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GananciasPageRoutingModule {}
