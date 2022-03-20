import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageProvinceComponent } from './image-province.component';

describe('ImageProvinceComponent', () => {
  let component: ImageProvinceComponent;
  let fixture: ComponentFixture<ImageProvinceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageProvinceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageProvinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
