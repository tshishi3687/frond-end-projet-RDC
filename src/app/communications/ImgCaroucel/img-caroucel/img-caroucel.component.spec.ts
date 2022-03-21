import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgCaroucelComponent } from './img-caroucel.component';

describe('ImgCaroucelComponent', () => {
  let component: ImgCaroucelComponent;
  let fixture: ComponentFixture<ImgCaroucelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgCaroucelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgCaroucelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
