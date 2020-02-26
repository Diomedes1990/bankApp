//import { CuentasDetallesPage } from './../cuentas-detalles/cuentas-detalles.page';
import { Router } from '@angular/router';
import { BankServicesService } from '../../../services/bank-service.service';
import { Accounts } from './../../../models/accounts';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.page.html',
  styleUrls: ['./cuentas.page.scss'],
})
export class CuentasPage implements OnInit {

  results: Observable<any>;

  constructor(public bankservice: BankServicesService, private router: Router ) { }

  ngOnInit() {
    this.bankservice.getAccounts();
    this.bankservice.getCards();
  }

  populateForm(account: Accounts) {
    alert(account.number);
    //this.router.navigate(['CuentasDetallesPage', account.number]);
  }
}
