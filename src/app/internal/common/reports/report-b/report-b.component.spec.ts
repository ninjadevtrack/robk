import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { ReportBComponent } from './report-b.component';

describe('ReportBComponent', () => {
  let component: ReportBComponent;
  let fixture: ComponentFixture<ReportBComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
