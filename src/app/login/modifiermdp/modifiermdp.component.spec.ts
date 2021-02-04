import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiermdpComponent } from './modifiermdp.component';

describe('ModifiermdpComponent', () => {
  let component: ModifiermdpComponent;
  let fixture: ComponentFixture<ModifiermdpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifiermdpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifiermdpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
