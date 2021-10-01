import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteLibrosMasBuscadosComponent } from './reporte-libros-mas-buscados.component';

describe('ReporteLibrosMasBuscadosComponent', () => {
  let component: ReporteLibrosMasBuscadosComponent;
  let fixture: ComponentFixture<ReporteLibrosMasBuscadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteLibrosMasBuscadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteLibrosMasBuscadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
