import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteHomeComponent } from './reporte-home.component';

describe('ReporteHomeComponent', () => {
  let component: ReporteHomeComponent;
  let fixture: ComponentFixture<ReporteHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
