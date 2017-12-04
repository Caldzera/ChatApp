import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatNicknameComponent } from './chat-nickname.component';

describe('ChatNicknameComponent', () => {
  let component: ChatNicknameComponent;
  let fixture: ComponentFixture<ChatNicknameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatNicknameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatNicknameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
