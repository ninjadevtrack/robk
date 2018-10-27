import { TestBed, inject } from '@angular/core/testing';

import { MediaPlanService } from './media-plan.service';

describe('MediaPlanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MediaPlanService]
    });
  });

  it('should be created', inject([MediaPlanService], (service: MediaPlanService) => {
    expect(service).toBeTruthy();
  }));
});
