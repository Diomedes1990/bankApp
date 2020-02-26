import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuentasDetallesPage } from './cuentas-detalles.page';

const routes: Routes = [
  {
    path: '',
    component: CuentasDetallesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuentasDetallesPageRoutingModule {}
