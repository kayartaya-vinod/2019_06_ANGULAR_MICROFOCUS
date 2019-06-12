import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaeeComponent } from './javaee.component';

describe('JavaeeComponent', () => {
  let component: JavaeeComponent;
  let fixture: ComponentFixture<JavaeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavaeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
