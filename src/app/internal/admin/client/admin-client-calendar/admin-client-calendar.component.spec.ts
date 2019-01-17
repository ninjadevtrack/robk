import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminClientCalendarComponent } from './admin-client-calendar.component';

describe('StudentCalendarComponent', () => {
  let component: AdminClientCalendarComponent;
  let fixture: ComponentFixture<AdminClientCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminClientCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminClientCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
