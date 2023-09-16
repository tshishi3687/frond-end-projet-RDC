import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationBienComponent } from './presentation-bien.component';

describe('PresentationBienComponent', () => {
  let component: PresentationBienComponent;
  let fixture: ComponentFixture<PresentationBienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentationBienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationBienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
