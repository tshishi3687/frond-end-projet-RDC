import { TestBed } from '@angular/core/testing';

import { TypeDeServiceService } from './type-de-service.service';

describe('TypeDeServiceService', () => {
  let service: TypeDeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeDeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
