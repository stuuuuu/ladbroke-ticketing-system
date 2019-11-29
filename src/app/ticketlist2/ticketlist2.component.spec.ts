import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ticketlist2Component } from './ticketlist2.component';

describe('Ticketlist2Component', () => {
  let component: Ticketlist2Component;
  let fixture: ComponentFixture<Ticketlist2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ticketlist2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ticketlist2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
