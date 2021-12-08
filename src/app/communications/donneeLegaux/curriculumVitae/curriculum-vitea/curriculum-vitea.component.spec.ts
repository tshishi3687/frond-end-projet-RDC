import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumViteaComponent } from './curriculum-vitea.component';

describe('CurriculumViteaComponent', () => {
  let component: CurriculumViteaComponent;
  let fixture: ComponentFixture<CurriculumViteaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurriculumViteaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculumViteaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
