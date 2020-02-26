import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Accounts } from '../models/accounts';
import { CreditCards } from '../models/credit-cards';
import { UserPersist } from '../models/user-persist';

@Injectable({
    providedIn: 'root'
})
export class BankServicesService {

    //temp productos y tarjetas
    readonly accountsURL = "https://api.myjson.com/bins/1eexs4"
    readonly CardsURL = "https://api.myjson.com/bins/1flszo"

    readonly loginUrl = "https://bhdleonfrontend-test.herokuapp.com/sign_in"

    public accounts: Accounts[];
    public listCards: CreditCards[];
    public userPersist: UserPersist;

    constructor(private http: HttpClient) { }


    loginRequest() {
        let headers = new HttpHeaders();
        headers  = headers.append('header-1', 'value-1');
        headers  = headers.append('header-2', 'value-2');

        // temp fixed consult
        let params = new HttpParams();
        params = params.append('userId', '00100010321');
        params = params.append('password', '1111');


        this.http.get(this.loginUrl)
            .toPromise().then(res => this.userPersist = res as UserPersist, {headers, params });
    }

    getAccounts() {
        this.http.get(this.accountsURL)
            .toPromise().then(res => this.accounts = res as Accounts[]);
    }

    getCards() {


        this.http.get(this.CardsURL)
            .toPromise().then(res => this.listCards = res as CreditCards[]);
    }

}
