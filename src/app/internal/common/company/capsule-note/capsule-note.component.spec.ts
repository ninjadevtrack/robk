import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapsuleNoteComponent } from './capsule-note.component';

describe('CapsuleNoteComponent', () => {
  let component: CapsuleNoteComponent;
  let fixture: ComponentFixture<CapsuleNoteComponent>;

  beforeEach(async(() => {
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
