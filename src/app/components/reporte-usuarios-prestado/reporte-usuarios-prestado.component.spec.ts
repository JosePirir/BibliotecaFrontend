import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteUsuariosPrestadoComponent } from './reporte-usuarios-prestado.component';

describe('ReporteUsuariosPrestadoComponent', () => {
  let component: ReporteUsuariosPrestadoComponent;
  let fixture: ComponentFixture<ReporteUsuariosPrestadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteUsuariosPrestadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteUsuariosPrestadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
