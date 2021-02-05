import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoMesReservationComponent } from './info-mes-reservation.component';

describe('InfoMesReservationComponent', () => {
  let component: InfoMesReservationComponent;
  let fixture: ComponentFixture<InfoMesReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoMesReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoMesReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
