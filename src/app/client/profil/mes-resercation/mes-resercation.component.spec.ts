import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesResercationComponent } from './mes-resercation.component';

describe('MesResercationComponent', () => {
  let component: MesResercationComponent;
  let fixture: ComponentFixture<MesResercationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesResercationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesResercationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
