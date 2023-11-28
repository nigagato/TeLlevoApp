import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RescontracodPage } from './rescontracod.page';

const routes: Routes = [
  {
    path: '',
    component: RescontracodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RescontracodPageRoutingModule {}
