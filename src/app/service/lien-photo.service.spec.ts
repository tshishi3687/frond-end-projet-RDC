import { TestBed } from '@angular/core/testing';

import { LienPhotoService } from './lien-photo.service';

describe('LienPhotoService', () => {
  let service: LienPhotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LienPhotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
