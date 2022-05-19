import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirContratComponent } from './voir-contrat.component';

describe('VoirContratComponent', () => {
  let component: VoirContratComponent;
  let fixture: ComponentFixture<VoirContratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoirContratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoirContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
