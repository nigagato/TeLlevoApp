import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasasedePage } from './casasede.page';

const routes: Routes = [
  {
    path: '',
    component: CasasedePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasasedePageRoutingModule {}
