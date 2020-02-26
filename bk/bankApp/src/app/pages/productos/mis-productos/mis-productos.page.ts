import { Router, NavigationExtras } from '@angular/router';
import { BankServiceService } from './../../../services/bank-service.service';
import { Accounts } from './../../../models/accounts';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mis-productos',
  templateUrl: './mis-productos.page.html',
  styleUrls: ['./mis-productos.page.scss'],
})
export class MisProductosPage implements OnInit {

  constructor(public bankservice: BankServiceService, private router: Router ) { }

  ngOnInit() {
    this.bankservice.getAccounts();
    this.bankservice.getCards();
  }

  populateForm(account: Accounts) {
    // alert(account.number);
    this.router.navigate(['cuentas-detalles', account.number]);


  }
}
