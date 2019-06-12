import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularjsComponent } from './angularjs.component';

describe('AngularjsComponent', () => {
  let component: AngularjsComponent;
  let fixture: ComponentFixture<AngularjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
