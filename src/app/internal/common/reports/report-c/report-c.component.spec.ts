import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { ReportCComponent } from './report-c.component';

describe('ReportCComponent', () => {
  let component: ReportCComponent;
  let fixture: ComponentFixture<ReportCComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
