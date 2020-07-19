import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerChangeComponent } from './employer-change.component';

describe('EmployerChangeComponent', () => {
  let component: EmployerChangeComponent;
  let fixture: ComponentFixture<EmployerChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
