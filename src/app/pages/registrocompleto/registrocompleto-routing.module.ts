import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrocompletoPage } from './registrocompleto.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrocompletoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrocompletoPageRoutingModule {}
