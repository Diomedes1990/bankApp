import { Router, NavigationExtras } from '@angular/router';
import { BankServicesService } from '../../../services/bank-service.service';
import { Accounts } from './../../../models/accounts';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mis-productos',
  templateUrl: './mis-productos.page.html',
  styleUrls: ['./mis-productos.page.scss'],
})
export class MisProductosPage implements OnInit {

  constructor(public bankservice: BankServicesService, private router: Router) { }

  ngOnInit() {
    this.bankservice.getAccounts();
    this.bankservice.getCards();
  }


  // accountDetails(account: Accounts) {
  //   let navigationExtras: NavigationExtras = {
  //     queryParams: {
  //       number: JSON.stringify(account.number)
  //     }


  //   };


  accountDetails(account: Accounts) {
    let navigationExtras: NavigationExtras = {
      state: {
        user: account.number
      }
    };

    this.router.navigateByUrl('/pages/cuentas');

    alert(account.number);


  }


}
