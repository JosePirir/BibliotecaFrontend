import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveLibroComponent } from './save-libro.component';

describe('SaveLibroComponent', () => {
  let component: SaveLibroComponent;
  let fixture: ComponentFixture<SaveLibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveLibroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
