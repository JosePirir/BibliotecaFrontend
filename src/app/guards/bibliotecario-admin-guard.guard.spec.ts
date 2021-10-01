import { TestBed } from '@angular/core/testing';

import { BibliotecarioAdminGuardGuard } from './bibliotecario-admin-guard.guard';

describe('BibliotecarioAdminGuardGuard', () => {
  let guard: BibliotecarioAdminGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BibliotecarioAdminGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
