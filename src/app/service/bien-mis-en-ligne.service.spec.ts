import { TestBed } from '@angular/core/testing';

import { BienMisEnLigneService } from './bien-mis-en-ligne.service';

describe('BienMisEnLigneService', () => {
  let service: BienMisEnLigneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BienMisEnLigneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
