import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteRevistasMasBuscadasComponent } from './reporte-revistas-mas-buscadas.component';

describe('ReporteRevistasMasBuscadasComponent', () => {
  let component: ReporteRevistasMasBuscadasComponent;
  let fixture: ComponentFixture<ReporteRevistasMasBuscadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteRevistasMasBuscadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteRevistasMasBuscadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
