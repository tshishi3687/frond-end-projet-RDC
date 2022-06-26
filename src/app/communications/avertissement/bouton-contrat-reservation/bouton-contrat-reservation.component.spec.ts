import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonContratReservationComponent } from './bouton-contrat-reservation.component';

describe('BoutonContratReservationComponent', () => {
  let component: BoutonContratReservationComponent;
  let fixture: ComponentFixture<BoutonContratReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutonContratReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutonContratReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
