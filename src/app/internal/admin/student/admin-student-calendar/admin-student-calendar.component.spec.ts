import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStudentCalendarComponent } from './admin-student-calendar.component';

describe('AdminStudentCalendarComponent', () => {
  let component: AdminStudentCalendarComponent;
  let fixture: ComponentFixture<AdminStudentCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminStudentCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStudentCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
