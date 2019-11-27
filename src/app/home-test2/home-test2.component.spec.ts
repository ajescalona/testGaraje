import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTest2Component } from './home-test2.component';

describe('HomeTest2Component', () => {
  let component: HomeTest2Component;
  let fixture: ComponentFixture<HomeTest2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTest2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTest2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
