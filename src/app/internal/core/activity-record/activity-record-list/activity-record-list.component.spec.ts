import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityRecordListComponent } from './activity-record-list.component';

describe('ActivityRecordListComponent', () => {
  let component: ActivityRecordListComponent;
  let fixture: ComponentFixture<ActivityRecordListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityRecordListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityRecordListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
