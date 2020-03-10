import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconLinkButtonComponent } from './icon-link-button.component';

describe('IconLinkButtonComponent', () => {
  let component: IconLinkButtonComponent;
  let fixture: ComponentFixture<IconLinkButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconLinkButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconLinkButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
