import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopContratMisEnLigneComponent } from './stop-contrat-mis-en-ligne.component';

describe('StopContratMisEnLigneComponent', () => {
  let component: StopContratMisEnLigneComponent;
  let fixture: ComponentFixture<StopContratMisEnLigneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StopContratMisEnLigneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StopContratMisEnLigneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
