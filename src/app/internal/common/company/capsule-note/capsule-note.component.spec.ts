import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { CapsuleNoteComponent } from './capsule-note.component';

describe('CapsuleNoteComponent', () => {
  let component: CapsuleNoteComponent;
  let fixture: ComponentFixture<CapsuleNoteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CapsuleNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapsuleNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
