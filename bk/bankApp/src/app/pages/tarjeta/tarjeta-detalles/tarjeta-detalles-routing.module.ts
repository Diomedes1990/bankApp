import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TarjetaDetallesPage } from './tarjeta-detalles.page';

const routes: Routes = [
  {
    path: '',
    component: TarjetaDetallesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TarjetaDetallesPageRoutingModule {}
