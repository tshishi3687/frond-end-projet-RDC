import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MettreBienEnLigneComponent } from './mettre-bien-en-ligne.component';

describe('MettreBienEnLigneComponent', () => {
  let component: MettreBienEnLigneComponent;
  let fixture: ComponentFixture<MettreBienEnLigneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MettreBienEnLigneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MettreBienEnLigneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
