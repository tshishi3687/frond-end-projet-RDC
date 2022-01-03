import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppressionBienComponent } from './suppression-bien.component';

describe('SuppressionBienComponent', () => {
  let component: SuppressionBienComponent;
  let fixture: ComponentFixture<SuppressionBienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuppressionBienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppressionBienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
