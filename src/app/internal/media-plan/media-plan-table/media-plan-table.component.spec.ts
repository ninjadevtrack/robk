import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaPlanTableComponent } from './media-plan-table.component';

describe('MediaPlanTableComponent', () => {
  let component: MediaPlanTableComponent;
  let fixture: ComponentFixture<MediaPlanTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaPlanTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaPlanTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
