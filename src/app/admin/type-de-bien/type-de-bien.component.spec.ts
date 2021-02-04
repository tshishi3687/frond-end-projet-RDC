import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeDeBienComponent } from './type-de-bien.component';

describe('TypeDeBienComponent', () => {
  let component: TypeDeBienComponent;
  let fixture: ComponentFixture<TypeDeBienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeDeBienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeDeBienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
