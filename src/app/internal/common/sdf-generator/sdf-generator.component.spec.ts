import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SdfGeneratorComponent } from './sdf-generator.component';

describe('SdfGeneratorComponent', () => {
  let component: SdfGeneratorComponent;
  let fixture: ComponentFixture<SdfGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SdfGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdfGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
