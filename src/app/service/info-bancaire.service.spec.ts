import { TestBed } from '@angular/core/testing';

import { InfoBancaireService } from './info-bancaire.service';

describe('InfoBancaireService', () => {
  let service: InfoBancaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoBancaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
