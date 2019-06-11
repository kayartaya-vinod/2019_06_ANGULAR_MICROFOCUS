import { DiscountedPricePipe } from './discounted-price.pipe';

describe('DiscountedPricePipe', () => {
  it('create an instance', () => {
    const pipe = new DiscountedPricePipe();
    expect(pipe).toBeTruthy();
  });
});
