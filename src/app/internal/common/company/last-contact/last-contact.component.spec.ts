import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { LastContactComponent } from './last-contact.component';

describe('LastContactComponent', () => {
  let component: LastContactComponent;
  let fixture: ComponentFixture<LastContactComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LastContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
