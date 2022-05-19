import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirBienComponent } from './voir-bien.component';

describe('VoirBienComponent', () => {
  let component: VoirBienComponent;
  let fixture: ComponentFixture<VoirBienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoirBienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoirBienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
