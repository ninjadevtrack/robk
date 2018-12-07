import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentMenuComponent } from './instrument-menu.component';

describe('InstrumentMenuComponent', () => {
  let component: InstrumentMenuComponent;
  let fixture: ComponentFixture<InstrumentMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
