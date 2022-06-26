import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRComponent } from './cr.component';

describe('CRComponent', () => {
  let component: CRComponent;
  let fixture: ComponentFixture<CRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
