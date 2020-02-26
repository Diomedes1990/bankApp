import { BankServiceService } from './../../services/bank-service.service';
import { Component, OnInit } from '@angular/core';
import { UserPersist } from 'src/app/models/user-persist';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public bankService: BankServiceService) { }

  ngOnInit() {


  }


  onSubmit(form: NgForm) {
    debugger;
    alert('funciona');
  }


}
