import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgALaOneComponent } from './img-ala-one.component';

describe('ImgALaOneComponent', () => {
  let component: ImgALaOneComponent;
  let fixture: ComponentFixture<ImgALaOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgALaOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgALaOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
