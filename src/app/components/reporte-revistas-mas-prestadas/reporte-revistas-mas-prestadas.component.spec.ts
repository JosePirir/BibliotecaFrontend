import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteRevistasMasPrestadasComponent } from './reporte-revistas-mas-prestadas.component';

describe('ReporteRevistasMasPrestadasComponent', () => {
  let component: ReporteRevistasMasPrestadasComponent;
  let fixture: ComponentFixture<ReporteRevistasMasPrestadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteRevistasMasPrestadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteRevistasMasPrestadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
