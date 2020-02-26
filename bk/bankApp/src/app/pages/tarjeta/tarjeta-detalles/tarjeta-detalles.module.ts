import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TarjetaDetallesPageRoutingModule } from './tarjeta-detalles-routing.module';

import { TarjetaDetallesPage } from './tarjeta-detalles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TarjetaDetallesPageRoutingModule
  ],
  declarations: [TarjetaDetallesPage]
})
export class TarjetaDetallesPageModule {}
