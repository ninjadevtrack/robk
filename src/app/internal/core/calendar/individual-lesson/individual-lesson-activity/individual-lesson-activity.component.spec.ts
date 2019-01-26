import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualLessonActivityComponent } from './individual-lesson-activity.component';

describe('IndividualLessonActivityComponent', () => {
  let component: IndividualLessonActivityComponent;
  let fixture: ComponentFixture<IndividualLessonActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualLessonActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualLessonActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
