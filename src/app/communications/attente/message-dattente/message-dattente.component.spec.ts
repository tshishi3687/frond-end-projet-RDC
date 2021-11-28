import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageDAttenteComponent } from './message-dattente.component';

describe('MessageDAttenteComponent', () => {
  let component: MessageDAttenteComponent;
  let fixture: ComponentFixture<MessageDAttenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageDAttenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageDAttenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
