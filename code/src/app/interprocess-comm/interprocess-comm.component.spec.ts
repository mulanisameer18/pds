import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterprocessCommComponent } from './interprocess-comm.component';

describe('InterprocessCommComponent', () => {
  let component: InterprocessCommComponent;
  let fixture: ComponentFixture<InterprocessCommComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterprocessCommComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterprocessCommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
