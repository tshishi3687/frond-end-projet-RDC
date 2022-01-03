import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneBienComponent } from './one-bien.component';

describe('OneBienComponent', () => {
  let component: OneBienComponent;
  let fixture: ComponentFixture<OneBienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneBienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneBienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
