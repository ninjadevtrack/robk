import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceListRootComponent } from './service-list-root.component';

describe('ServiceListRootComponent', () => {
  let component: ServiceListRootComponent;
  let fixture: ComponentFixture<ServiceListRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceListRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceListRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
