import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cuentas-detalles',
  templateUrl: './cuentas-detalles.page.html',
  styleUrls: ['./cuentas-detalles.page.scss'],
})
export class CuentasDetallesPage implements OnInit {

  constructor(private route: ActivatedRoute) { }

param1: number;

  ngOnInit() {

    this.param1 = this.route.params.subscribe(params => {
      this.id = params.id;
    });

    alert(this.id);
    }

}
