import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualLessonHistoryComponent } from './individual-lesson-history.component';

describe('IndividualLessonHistoryComponent', () => {
  let component: IndividualLessonHistoryComponent;
  let fixture: ComponentFixture<IndividualLessonHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualLessonHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualLessonHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
