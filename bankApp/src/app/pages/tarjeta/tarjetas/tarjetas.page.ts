import { Router } from '@angular/router';
import { BankServicesService } from '../../../services/bank-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.page.html',
  styleUrls: ['./tarjetas.page.scss'],
})
export class TarjetasPage implements OnInit {

  constructor(public bankservice: BankServicesService, private router: Router ) { }

  ngOnInit() {
    this.bankservice.getCards();
  }

}
