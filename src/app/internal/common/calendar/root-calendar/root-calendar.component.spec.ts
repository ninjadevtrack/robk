import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootCalendarComponent } from './root-calendar.component';

describe('RootCalendarComponent', () => {
  let component: RootCalendarComponent;
  let fixture: ComponentFixture<RootCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
