
import { Component, OnInit } from '@angular/core';
import { UserPersist } from 'src/app/models/user-persist';
import { NgForm } from '@angular/forms';
import { BankServicesService } from 'src/app/services/bank-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public userPersist: UserPersist;

  constructor(public bankService: BankServicesService) { }

  ngOnInit() {
    this.userPersist = this.bankService.loginRequest();

  }

  onSubmit(form: NgForm) {
    debugger;
    alert('funciona');
  }
}
