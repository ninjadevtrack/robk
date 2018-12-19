import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientListRootComponent } from './client-list-root.component';

describe('ClientListRootComponent', () => {
  let component: ClientListRootComponent;
  let fixture: ComponentFixture<ClientListRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientListRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientListRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
