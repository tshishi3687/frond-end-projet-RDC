import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirContratReservationComponent } from './voir-contrat-reservation.component';

describe('VoirContratReservationComponent', () => {
  let component: VoirContratReservationComponent;
  let fixture: ComponentFixture<VoirContratReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoirContratReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoirContratReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
