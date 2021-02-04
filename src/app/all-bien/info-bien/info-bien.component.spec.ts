import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBienComponent } from './info-bien.component';

describe('InfoBienComponent', () => {
  let component: InfoBienComponent;
  let fixture: ComponentFixture<InfoBienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoBienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoBienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
