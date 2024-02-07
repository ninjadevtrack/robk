import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { IconLinkButtonComponent } from './icon-link-button.component';

describe('IconLinkButtonComponent', () => {
  let component: IconLinkButtonComponent;
  let fixture: ComponentFixture<IconLinkButtonComponent>;

  beforeEach(waitForAsync(() => {
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
