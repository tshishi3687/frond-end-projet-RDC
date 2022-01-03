import { TestBed } from '@angular/core/testing';

import { AdressUserServiceService } from './adress-user-service.service';

describe('AdressUserServiceService', () => {
  let service: AdressUserServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdressUserServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
