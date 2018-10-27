import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaPlanAddComponent } from './media-plan-add.component';

describe('MediaPlanAddComponent', () => {
  let component: MediaPlanAddComponent;
  let fixture: ComponentFixture<MediaPlanAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaPlanAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaPlanAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
