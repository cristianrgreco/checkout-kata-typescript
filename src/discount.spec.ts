import {Discount} from './discount';


describe('Discount', () => {

  it('should throw an error if options is undefined', () => {

    expect(() => new Discount(undefined)).toThrow('options cannot be null');
  });

  it('should throw an error if options is null', () => {

    expect(() => new Discount(null)).toThrow('options cannot be null');
  });
});