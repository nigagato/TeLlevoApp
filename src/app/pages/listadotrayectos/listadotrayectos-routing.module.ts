import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadotrayectosPage } from './listadotrayectos.page';

const routes: Routes = [
  {
    path: '',
    component: ListadotrayectosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadotrayectosPageRoutingModule {}
