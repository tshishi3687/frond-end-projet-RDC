import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageVilleComponent } from './image-ville.component';

describe('ImageVilleComponent', () => {
  let component: ImageVilleComponent;
  let fixture: ComponentFixture<ImageVilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageVilleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageVilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
