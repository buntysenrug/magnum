import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintCalendarComponent } from './complaint-calendar.component';

describe('ComplaintCalendarComponent', () => {
  let component: ComplaintCalendarComponent;
  let fixture: ComponentFixture<ComplaintCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplaintCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
