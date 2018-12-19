import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentListRootComponent } from './student-list-root.component';

describe('StudentListRootComponent', () => {
  let component: StudentListRootComponent;
  let fixture: ComponentFixture<StudentListRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentListRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentListRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
