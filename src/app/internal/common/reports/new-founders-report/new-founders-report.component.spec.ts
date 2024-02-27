import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { NewFoundersComponent } from './new-founders-report.component';

describe('NewFoundersComponent', () => {
  let component: NewFoundersComponent;
  let fixture: ComponentFixture<NewFoundersComponent>;

  beforeEach(waitForAsync(() => {
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
