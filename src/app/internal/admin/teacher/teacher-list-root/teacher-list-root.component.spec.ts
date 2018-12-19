import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherListRootComponent } from './teacher-list-root.component';

describe('TeacherListRootComponent', () => {
  let component: TeacherListRootComponent;
  let fixture: ComponentFixture<TeacherListRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherListRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherListRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
