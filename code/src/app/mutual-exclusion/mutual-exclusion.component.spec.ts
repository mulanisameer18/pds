import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MutualExclusionComponent } from './mutual-exclusion.component';

describe('MutualExclusionComponent', () => {
  let component: MutualExclusionComponent;
  let fixture: ComponentFixture<MutualExclusionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MutualExclusionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MutualExclusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
