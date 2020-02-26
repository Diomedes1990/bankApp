import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuentasDetallesPageRoutingModule } from './cuentas-detalles-routing.module';

import { CuentasDetallesPage } from './cuentas-detalles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuentasDetallesPageRoutingModule
  ],
  declarations: [CuentasDetallesPage]
})
export class CuentasDetallesPageModule {}
