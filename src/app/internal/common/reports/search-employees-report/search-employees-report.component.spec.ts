import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEmployeesReportComponent } from './search-employees-report.component';

describe('SearchEmployeesReportComponent', () => {
  let component: SearchEmployeesReportComponent;
  let fixture: ComponentFixture<SearchEmployeesReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchEmployeesReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchEmployeesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
