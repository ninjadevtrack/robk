import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentListRootComponent } from './enrollment-list-root.component';

describe('EnrollmentListRootComponent', () => {
  let component: EnrollmentListRootComponent;
  let fixture: ComponentFixture<EnrollmentListRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollmentListRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollmentListRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
