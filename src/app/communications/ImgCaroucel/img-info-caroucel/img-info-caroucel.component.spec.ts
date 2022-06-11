import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgInfoCaroucelComponent } from './img-info-caroucel.component';

describe('ImgInfoCaroucelComponent', () => {
  let component: ImgInfoCaroucelComponent;
  let fixture: ComponentFixture<ImgInfoCaroucelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgInfoCaroucelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgInfoCaroucelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
