import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CMELComponent } from './cmel.component';

describe('CMELComponent', () => {
  let component: CMELComponent;
  let fixture: ComponentFixture<CMELComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CMELComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CMELComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
