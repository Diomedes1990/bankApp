import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisProductosPageRoutingModule } from './mis-productos-routing.module';

import { MisProductosPage } from './mis-productos.page';
import { BankServicesService } from 'src/app/services/bank-service.service';
import { Route } from '@angular/compiler/src/core';
import { Accounts } from 'src/app/models/accounts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisProductosPageRoutingModule
  ],
  declarations: [MisProductosPage]
})
export class MisProductosPageModule {


  
}
