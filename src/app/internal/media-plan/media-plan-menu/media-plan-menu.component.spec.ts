import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaPlanMenuComponent } from './media-plan-menu.component';

describe('MediaPlanMenuComponent', () => {
  let component: MediaPlanMenuComponent;
  let fixture: ComponentFixture<MediaPlanMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaPlanMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaPlanMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
