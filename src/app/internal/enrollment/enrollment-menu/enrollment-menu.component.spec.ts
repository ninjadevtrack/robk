import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentMenuComponent } from './enrollment-menu.component';

describe('EnrollmentMenuComponent', () => {
  let component: EnrollmentMenuComponent;
  let fixture: ComponentFixture<EnrollmentMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollmentMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollmentMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
