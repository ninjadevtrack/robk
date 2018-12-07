import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentTableComponent } from './instrument-table.component';

describe('InstrumentTableComponent', () => {
  let component: InstrumentTableComponent;
  let fixture: ComponentFixture<InstrumentTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
