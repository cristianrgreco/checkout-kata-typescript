import {Item} from './item';


describe('Item', () => {

  it('should construct an instance of an Item', () => {

    const item: Item = new Item({sku: 'A', price: 50});

    expect(item.sku).toBe('A');
    expect(item.price).toBe(50);
  });

  it('should throw an error if options is undefined', () => {

    expect(() => new Item(undefined)).toThrow('options cannot be null');
  });

  it('should throw an error if options is null', () => {

    expect(() => new Item(null)).toThrow('options cannot be null');
  });
});