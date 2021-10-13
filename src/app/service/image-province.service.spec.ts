import { TestBed } from '@angular/core/testing';

import { ImageProvinceService } from './image-province.service';

describe('ImageProvinceService', () => {
  let service: ImageProvinceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageProvinceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
