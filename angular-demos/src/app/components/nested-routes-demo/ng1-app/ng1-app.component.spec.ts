import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng1AppComponent } from './ng1-app.component';

describe('Ng1AppComponent', () => {
  let component: Ng1AppComponent;
  let fixture: ComponentFixture<Ng1AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng1AppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng1AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
