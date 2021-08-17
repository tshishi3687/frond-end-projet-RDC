import { TestBed } from '@angular/core/testing';

import { DureeLocationService } from './duree-location.service';

describe('DureeLocationService', () => {
  let service: DureeLocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DureeLocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
