import {Receipt} from './receipt';


describe('Receipt', () => {

  it('should construct an instance of a Receipt', () => {

    const receipt: Receipt = new Receipt({total: 50});

    expect(receipt.total).toBe(50);
  });

  it('should throw an error if options is undefined', () => {

    expect(() => new Receipt(undefined)).toThrow('options cannot be null');
  });

  it('should throw an error if options is null', () => {

    expect(() => new Receipt(null)).toThrow('options cannot be null');
  });
});