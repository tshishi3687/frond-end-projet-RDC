import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeLoguerComponent } from './se-loguer.component';

describe('SeLoguerComponent', () => {
  let component: SeLoguerComponent;
  let fixture: ComponentFixture<SeLoguerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeLoguerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeLoguerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
