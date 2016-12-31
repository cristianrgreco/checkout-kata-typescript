import {Discount} from './discount';


describe('Discount', () => {

  it('should construct an instance of a Discount', () => {

    const discount: Discount = new Discount({sku: 'A', amount: 1, discountPrice: 50});

    expect(discount.sku).toBe('A');
    expect(discount.amount).toBe(1);
    expect(discount.discountPrice).toBe(50);
  });

  it('should throw an error if options is undefined', () => {

    expect(() => new Discount(undefined)).toThrow('options cannot be null');
  });

  it('should throw an error if options is null', () => {

    expect(() => new Discount(null)).toThrow('options cannot be null');
  });
});