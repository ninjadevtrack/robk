import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphWatchListComponent } from './graph-watch-list.component';

describe('GraphWatchListComponent', () => {
  let component: GraphWatchListComponent;
  let fixture: ComponentFixture<GraphWatchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphWatchListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphWatchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
