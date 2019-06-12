import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular7Component } from './angular7.component';

describe('Angular7Component', () => {
  let component: Angular7Component;
  let fixture: ComponentFixture<Angular7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Angular7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Angular7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
