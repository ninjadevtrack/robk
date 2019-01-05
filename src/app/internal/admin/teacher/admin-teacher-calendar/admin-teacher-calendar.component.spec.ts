import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTeacherCalendarComponent } from './admin-teacher-calendar.component';

describe('StudentCalendarComponent', () => {
  let component: AdminTeacherCalendarComponent;
  let fixture: ComponentFixture<AdminTeacherCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTeacherCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTeacherCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
