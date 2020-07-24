import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportAComponent } from './report-a.component';

describe('ReportAComponent', () => {
  let component: ReportAComponent;
  let fixture: ComponentFixture<ReportAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
