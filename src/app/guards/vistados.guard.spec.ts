import { TestBed } from '@angular/core/testing';

import { VistadosGuard } from './vistados.guard';

describe('VistadosGuard', () => {
  let guard: VistadosGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VistadosGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
