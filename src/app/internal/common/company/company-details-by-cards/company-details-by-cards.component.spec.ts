import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDetailsByCardsComponent } from './company-details-by-cards.component';

describe('CompanyDetailsByCardsComponent', () => {
  let component: CompanyDetailsByCardsComponent;
  let fixture: ComponentFixture<CompanyDetailsByCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyDetailsByCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDetailsByCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
