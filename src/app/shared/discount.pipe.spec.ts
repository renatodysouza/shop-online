import { DiscountPipe } from './discount.pipe';

describe('WrapTextPipe', () => {
  it('create an instance', () => {
    const pipe = new DiscountPipe();
    expect(pipe).toBeTruthy();
  });
});
