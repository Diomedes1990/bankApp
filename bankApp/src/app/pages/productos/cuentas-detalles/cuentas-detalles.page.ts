import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';


@Component({
  selector: 'app-cuentas-detalles',
  templateUrl: './cuentas-detalles.page.html',
  styleUrls: ['./cuentas-detalles.page.scss'],
})
export class CuentasDetallesPage implements OnInit {

  data: any;
 
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
          this.data = this.router.getCurrentNavigation().extras.state.user;
      }
    });
  }

  ngOnInit() {
    alert(this.data);
  }

}
