import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropriettaireComponent } from './propriettaire.component';

describe('PropriettaireComponent', () => {
  let component: PropriettaireComponent;
  let fixture: ComponentFixture<PropriettaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropriettaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropriettaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
