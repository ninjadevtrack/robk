import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaPlanEditComponent } from './media-plan-edit.component';

describe('MediaPlanEditComponent', () => {
  let component: MediaPlanEditComponent;
  let fixture: ComponentFixture<MediaPlanEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaPlanEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaPlanEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
