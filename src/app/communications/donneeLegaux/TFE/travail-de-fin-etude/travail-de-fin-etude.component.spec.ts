import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravailDeFinEtudeComponent } from './travail-de-fin-etude.component';

describe('TravailDeFinEtudeComponent', () => {
  let component: TravailDeFinEtudeComponent;
  let fixture: ComponentFixture<TravailDeFinEtudeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravailDeFinEtudeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravailDeFinEtudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
