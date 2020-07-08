import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapsuleNotesComponent } from './capsule-notes.component';

describe('CapsuleNotesComponent', () => {
  let component: CapsuleNotesComponent;
  let fixture: ComponentFixture<CapsuleNotesComponent>;

  beforeEach(async(() => {
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
