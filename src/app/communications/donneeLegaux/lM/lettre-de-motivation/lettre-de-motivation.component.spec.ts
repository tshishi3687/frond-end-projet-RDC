import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LettreDeMotivationComponent } from './lettre-de-motivation.component';

describe('LettreDeMotivationComponent', () => {
  let component: LettreDeMotivationComponent;
  let fixture: ComponentFixture<LettreDeMotivationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LettreDeMotivationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LettreDeMotivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
