import {Discounts} from './discounts';
import {Discount} from './discount';


describe('Discounts', () => {

  it('should return null when fetching Discount for an item which has no discount', () => {

    expect(new Discounts().get('A')).toBe(null);
  });

  it('should return the Discount for an item which has a discount', () => {

    const discountA: Discount = new Discount({sku: 'A', amount: 1, discountPrice: 50})

    const discounts: Discounts = new Discounts()
        .add(discountA);

    expect(discounts.get('A')).toEqual(discountA);
  });

  it('should throw an error when adding an undefined item', () => {

    expect(() => new Discounts().add(undefined)).toThrow('discount cannot be null');
  });

  it('should throw an error when adding a null item', () => {

    expect(() => new Discounts().add(null)).toThrow('discount cannot be null');
  });

  it('should throw an error when getting a discount for an undefined SKU', () => {

    expect(() => new Discounts().get(undefined)).toThrow('sku cannot be null');
  });

  it('should throw an error when getting a discount for a null SKU', () => {

    expect(() => new Discounts().get(null)).toThrow('sku cannot be null');
  });
});