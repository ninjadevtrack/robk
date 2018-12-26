import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualLessonAddComponent } from './individual-lesson-add.component';

describe('TeacherAddComponent', () => {
  let component: IndividualLessonAddComponent;
  let fixture: ComponentFixture<IndividualLessonAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualLessonAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualLessonAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
