import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeDeSeviceComponent } from './type-de-sevice.component';

describe('TypeDeSeviceComponent', () => {
  let component: TypeDeSeviceComponent;
  let fixture: ComponentFixture<TypeDeSeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeDeSeviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeDeSeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
