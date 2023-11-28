import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViajeconductorPage } from './viajeconductor.page';

const routes: Routes = [
  {
    path: '',
    component: ViajeconductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViajeconductorPageRoutingModule {}
