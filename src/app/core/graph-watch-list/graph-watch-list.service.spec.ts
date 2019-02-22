import { TestBed } from '@angular/core/testing';

import { GraphWatchListService } from './graph-watch-list.service';

describe('GraphWatchListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GraphWatchListService = TestBed.get(GraphWatchListService);
    expect(service).toBeTruthy();
  });
});
