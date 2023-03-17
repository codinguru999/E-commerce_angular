import { TestBed } from '@angular/core/testing';

import { LogingrdGuard } from './logingrd.guard';

describe('LogingrdGuard', () => {
  let guard: LogingrdGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LogingrdGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
