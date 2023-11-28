import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContrarestablecidaPage } from './contrarestablecida.page';

const routes: Routes = [
  {
    path: '',
    component: ContrarestablecidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContrarestablecidaPageRoutingModule {}
