/// <reference path="../typings/main.d.ts" />

import {Receipt} from './receipt';


describe('Receipt', () => {

  it('should throw an error if options is undefined', () => {

    expect(() => new Receipt(undefined)).toThrow('options cannot be null');
  });

  it('should throw an error if options is null', () => {

    expect(() => new Receipt(null)).toThrow('options cannot be null');
  });
});