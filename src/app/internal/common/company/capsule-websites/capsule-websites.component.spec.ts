import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapsuleWebsitesComponent } from './capsule-websites.component';

describe('CapsuleWebsitesComponent', () => {
  let component: CapsuleWebsitesComponent;
  let fixture: ComponentFixture<CapsuleWebsitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapsuleWebsitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapsuleWebsitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
