import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistadosPage } from './vistados.page';

const routes: Routes = [
  {
    path: '',
    component: VistadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VistadosPageRoutingModule {}
