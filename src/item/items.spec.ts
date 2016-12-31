import {Item} from './item';
import {Items} from './items';


describe('Items', () => {

  it('should return an empty array when no items are added', () => {

    expect(new Items().list()).toEqual([]);
  });

  it('should return an array of items which have been added', () => {

    const itemA: Item = new Item({sku: 'A', price: 50});

    const items: Items = new Items()
        .add(itemA);

    expect(items.list()).toEqual([itemA]);
  });

  it('should return a quantity of zero for an item which has not been added', () => {

    expect(new Items().getQuantity(new Item({sku: 'A', price: 50}))).toBe(0);
  });

  it('should return the quantity of the items which are added', () => {

    const itemA: Item = new Item({sku: 'A', price: 50});
    const itemB: Item = new Item({sku: 'B', price: 50});

    const items: Items = new Items()
        .add(itemA)
        .add(itemA)
        .add(itemB);

    expect(items.getQuantity(itemA)).toBe(2);
    expect(items.getQuantity(itemB)).toBe(1);
  });

  it('should raise an error if an undefined item is added', () => {

    expect(() => new Items().add(undefined)).toThrow('item cannot be null');
  });

  it('should raise an error if a null item is added', () => {

    expect(() => new Items().add(undefined)).toThrow('item cannot be null');
  });

  it('should raise an error if quantity is requested for an undefined item', () => {

    expect(() => new Items().getQuantity(undefined)).toThrow('item cannot be null');
  });

  it('should raise an error if quantity is requested for a null item', () => {

    expect(() => new Items().getQuantity(null)).toThrow('item cannot be null');
  });
});