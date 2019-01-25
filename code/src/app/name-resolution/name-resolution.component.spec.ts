import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameResolutionComponent } from './name-resolution.component';

describe('NameResolutionComponent', () => {
  let component: NameResolutionComponent;
  let fixture: ComponentFixture<NameResolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameResolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameResolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
