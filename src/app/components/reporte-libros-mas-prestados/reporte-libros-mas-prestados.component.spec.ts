import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteLibrosMasPrestadosComponent } from './reporte-libros-mas-prestados.component';

describe('ReporteLibrosMasPrestadosComponent', () => {
  let component: ReporteLibrosMasPrestadosComponent;
  let fixture: ComponentFixture<ReporteLibrosMasPrestadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteLibrosMasPrestadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteLibrosMasPrestadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
