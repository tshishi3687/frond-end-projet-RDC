import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BienMisEnLigneComponent } from './bien-mis-en-ligne.component';

describe('BienMisEnLigneComponent', () => {
  let component: BienMisEnLigneComponent;
  let fixture: ComponentFixture<BienMisEnLigneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BienMisEnLigneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BienMisEnLigneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
