import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapsuleFieldsComponent } from './capsule-fields.component';

describe('CapsuleFieldsComponent', () => {
  let component: CapsuleFieldsComponent;
  let fixture: ComponentFixture<CapsuleFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapsuleFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapsuleFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
