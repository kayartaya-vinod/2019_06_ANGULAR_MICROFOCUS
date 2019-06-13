import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng1ProductListComponent } from './ng1-product-list.component';

describe('Ng1ProductListComponent', () => {
  let component: Ng1ProductListComponent;
  let fixture: ComponentFixture<Ng1ProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng1ProductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng1ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
