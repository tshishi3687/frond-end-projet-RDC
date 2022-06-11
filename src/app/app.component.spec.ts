import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'untitled'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    // @ts-ignore
    expect(app.title).toEqual('untitled');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('untitled app is running!');
  });

  // tslint:disable-next-line:typedef
  function ChangeClassMenu()
  {
    let scrollY;
    if (document.all)
    {
      if (!document.documentElement.scrollTop) {
        scrollY = document.body.scrollTop;
      }
      else {
        scrollY = document.documentElement.scrollTop;
      }
    }
    else {
      scrollY = window.pageYOffset;
    }
    if (scrollY > 100) {
      document.getElementById('menu_principal').className = 'menu_principal2';
    }
    else {
      document.getElementById('menu_principal').className = 'menu_principal1';
    }
  }
  window.onscroll = ChangeClassMenu;
});
