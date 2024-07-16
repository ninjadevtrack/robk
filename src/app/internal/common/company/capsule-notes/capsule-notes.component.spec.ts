import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { CapsuleNotesComponent } from './capsule-notes.component';

describe('CapsuleNotesComponent', () => {
  let component: CapsuleNotesComponent;
  let fixture: ComponentFixture<CapsuleNotesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CapsuleNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapsuleNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
