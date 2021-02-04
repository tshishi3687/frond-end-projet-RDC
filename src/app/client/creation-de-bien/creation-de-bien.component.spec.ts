import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationDeBienComponent } from './creation-de-bien.component';

describe('CreationDeBienComponent', () => {
  let component: CreationDeBienComponent;
  let fixture: ComponentFixture<CreationDeBienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationDeBienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationDeBienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
