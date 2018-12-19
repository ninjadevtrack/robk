import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentListRootComponent } from './instrument-list-root.component';

describe('InstrumentListRootComponent', () => {
  let component: InstrumentListRootComponent;
  let fixture: ComponentFixture<InstrumentListRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentListRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentListRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
