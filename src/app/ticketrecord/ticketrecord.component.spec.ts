import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketrecordComponent } from './ticketrecord.component';

describe('TicketrecordComponent', () => {
  let component: TicketrecordComponent;
  let fixture: ComponentFixture<TicketrecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketrecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
