/// <reference path="../typings/main.d.ts" />

import {Item} from './item';


describe('Item', () => {

  it('should throw an error if options is undefined', () => {

    expect(() => new Item(undefined)).toThrow('options cannot be null');
  });

  it('should throw an error if options is null', () => {

    expect(() => new Item(null)).toThrow('options cannot be null');
  });
});