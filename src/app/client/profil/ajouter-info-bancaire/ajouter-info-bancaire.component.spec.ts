import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterInfoBancaireComponent } from './ajouter-info-bancaire.component';

describe('AjouterInfoBancaireComponent', () => {
  let component: AjouterInfoBancaireComponent;
  let fixture: ComponentFixture<AjouterInfoBancaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterInfoBancaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterInfoBancaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
