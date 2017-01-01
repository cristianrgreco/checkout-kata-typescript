import {Item} from '../item/item';
import {Items} from '../item/items';
import {Discount} from '../discount/discount';
import {Discounts} from '../discount/discounts';
import {PriceCalculator} from './price-calculator';


describe('PriceCalculator', () => {

  let calculator: PriceCalculator;


  beforeEach(() => {

    calculator = new PriceCalculator();
  });


  it('should return zero for no items', () => {

    expect(calculator.calculate(new Items())).toBe(0);
  });

  it('should return the price of the item', () => {

    const itemA: Item = new Item({sku: 'A', price: 50});

    const items: Items = new Items()
        .add(itemA);

    expect(calculator.calculate(items)).toBe(50);
  });

  it('should return the price of all items', () => {

    const itemA: Item = new Item({sku: 'A', price: 50});

    const items: Items = new Items()
        .add(itemA)
        .add(itemA)
        .add(itemA);

    expect(calculator.calculate(items)).toBe(150);
  });

  it('should return the discounted price for an item with a discount', () => {

    const itemA: Item = new Item({sku: 'A', price: 50});
    const discountA: Discount = new Discount({sku: 'A', amount: 1, discountPrice: 45});

    const items: Items = new Items()
        .add(itemA);

    const discounts: Discounts = new Discounts()
        .add(discountA);

    expect(calculator.calculate(items, discounts)).toBe(45);
  });

  it('should return multiple discounted prices for each multiple of the required amount for an item with a discount', () => {

    const itemA: Item = new Item({sku: 'A', price: 50});
    const discountA: Discount = new Discount({sku: 'A', amount: 2, discountPrice: 90});

    const items: Items = new Items()
        .add(itemA)
        .add(itemA)
        .add(itemA)
        .add(itemA);

    const discounts: Discounts = new Discounts()
        .add(discountA);

    expect(calculator.calculate(items, discounts)).toBe(180);
  });

  it('should return the discounted price and the original price for items in excess of the required discount amount', () => {

    const itemA: Item = new Item({sku: 'A', price: 50});
    const discountA: Discount = new Discount({sku: 'A', amount: 2, discountPrice: 90});

    const items: Items = new Items()
        .add(itemA)
        .add(itemA)
        .add(itemA);

    const discounts: Discounts = new Discounts()
        .add(discountA);

    expect(calculator.calculate(items, discounts)).toBe(140);
  });

  it('should throw an error if items is undefined', () => {

    expect(() => calculator.calculate(undefined)).toThrow('items cannot be null');
  });

  it('should throw an error if items is null', () => {

    expect(() => calculator.calculate(null)).toThrow('items cannot be null');
  });
});