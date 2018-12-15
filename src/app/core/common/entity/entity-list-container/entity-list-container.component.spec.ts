import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityListContainerComponent } from './entity-list-container.component';

describe('EntityListContainerComponent', () => {
  let component: EntityListContainerComponent;
  let fixture: ComponentFixture<EntityListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityListContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
