import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CuentasDetallesPage } from './cuentas-detalles.page';

describe('CuentasDetallesPage', () => {
  let component: CuentasDetallesPage;
  let fixture: ComponentFixture<CuentasDetallesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuentasDetallesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CuentasDetallesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
