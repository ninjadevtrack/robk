import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFoundersComponent } from './new-founders-report.component';

describe('NewFoundersComponent', () => {
  let component: NewFoundersComponent;
  let fixture: ComponentFixture<NewFoundersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFoundersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFoundersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
