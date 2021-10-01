import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetLibrosComponent } from './get-libros.component';

describe('GetLibrosComponent', () => {
  let component: GetLibrosComponent;
  let fixture: ComponentFixture<GetLibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetLibrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
