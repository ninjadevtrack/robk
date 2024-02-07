import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { EntityMenuComponent } from './entity-menu.component';

describe('EntityMenuComponent', () => {
  let component: EntityMenuComponent;
  let fixture: ComponentFixture<EntityMenuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
