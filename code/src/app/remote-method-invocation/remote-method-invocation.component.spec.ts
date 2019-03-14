import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteMethodInvocationComponent } from './remote-method-invocation.component';

describe('RemoteMethodInvocationComponent', () => {
  let component: RemoteMethodInvocationComponent;
  let fixture: ComponentFixture<RemoteMethodInvocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoteMethodInvocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoteMethodInvocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
