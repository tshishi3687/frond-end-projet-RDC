import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationBienCreeComponent } from './presentation-bien-cree.component';

describe('PresentationBienCreeComponent', () => {
  let component: PresentationBienCreeComponent;
  let fixture: ComponentFixture<PresentationBienCreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentationBienCreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationBienCreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
