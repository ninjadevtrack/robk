import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { CapsuleDetailsComponent } from './capsule-details.component';

describe('CapsuleDetailsComponent', () => {
  let component: CapsuleDetailsComponent;
  let fixture: ComponentFixture<CapsuleDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CapsuleDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapsuleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
