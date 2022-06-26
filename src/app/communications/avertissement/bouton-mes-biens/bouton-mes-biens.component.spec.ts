import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonMesBiensComponent } from './bouton-mes-biens.component';

describe('BoutonMesBiensComponent', () => {
  let component: BoutonMesBiensComponent;
  let fixture: ComponentFixture<BoutonMesBiensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutonMesBiensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutonMesBiensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
