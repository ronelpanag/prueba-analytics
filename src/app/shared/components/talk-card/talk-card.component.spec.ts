import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkCardComponent } from './talk-card.component';

describe('TalkCardComponent', () => {
  let component: TalkCardComponent;
  let fixture: ComponentFixture<TalkCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalkCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalkCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
