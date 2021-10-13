import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoMesDemandesComponent } from './info-mes-demandes.component';

describe('InfoMesDemandesComponent', () => {
  let component: InfoMesDemandesComponent;
  let fixture: ComponentFixture<InfoMesDemandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoMesDemandesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoMesDemandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
