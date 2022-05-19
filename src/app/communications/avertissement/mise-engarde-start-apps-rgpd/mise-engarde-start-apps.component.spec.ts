import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiseEngardeStartAppsComponent } from './mise-engarde-start-apps.component';

describe('MiseEngardeStartAppsComponent', () => {
  let component: MiseEngardeStartAppsComponent;
  let fixture: ComponentFixture<MiseEngardeStartAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiseEngardeStartAppsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiseEngardeStartAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
