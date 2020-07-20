import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportBComponent } from './report-b.component';

describe('ReportBComponent', () => {
  let component: ReportBComponent;
  let fixture: ComponentFixture<ReportBComponent>;

  beforeEach(async(() => {
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
