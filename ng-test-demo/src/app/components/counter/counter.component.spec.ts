import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';


// test suite
describe('CounterComponent', () => {

  let fixture;
  let cmp;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CounterComponent
      ]
    }).compileComponents();
  }));

  beforeEach(async () => {
    fixture = TestBed.createComponent(CounterComponent);
    cmp = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  })

  // test case / test spec
  it("should pass", () => {
    // one or more assertions (expectations/matchers);
    expect(100).toBe(100);
  });

  it("should get the current value of count", () => {
    expect(cmp.count).toEqual(1);
  });

  it("should increment the value of count", () => {
    const value1 = cmp.count;
    cmp.incrementCount();
    const value2 = cmp.count;
    expect(value2).toBeGreaterThan(value1);
    expect(value2).toEqual(value1 + 1);

    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent)
      .toContain(`Value of count is ${value2}`);

  });



});
