import {Checkout} from './checkout';
import {Receipt} from './receipt';
import {Item} from './item';
import {Discount} from './discount';


describe('Checkout', () => {

  let checkout: Checkout;


  beforeEach(() => {

    checkout = new Checkout();
  });


  it('should return zero when checking out an empty basket', () => {

    const receipt: Receipt = checkout.complete();

    expect(receipt.total).toBe(0);
  });

  it('should return the price of the scanned item when checking out a basket with one item', () => {

    const itemA: Item = new Item({sku: 'A', price: 50});

    const receipt: Receipt = checkout
        .scan(itemA)
        .complete();

    expect(receipt.total).toBe(50);
  });

  it('should return the price of all scanned items when checking out a basket with multiple items', () => {

    const itemA: Item = new Item({sku: 'A', price: 50});
    const itemB: Item = new Item({sku: 'A', price: 45});

    const receipt: Receipt = checkout
        .scan(itemA)
        .scan(itemB)
        .complete();

    expect(receipt.total).toBe(95);
  });

  it('should return a discounted price for a scanned item when checking out a basket with a discounted item', () => {

    const itemA: Item = new Item({sku: 'A', price: 50});
    const discountA: Discount = new Discount({sku: 'A', amount: 1, discountPrice: 45});

    const receipt: Receipt = checkout
        .discount(discountA)
        .scan(itemA)
        .complete()

    expect(receipt.total).toBe(45);
  });

  it('should return a discounted price and the original price for a scanned item which exceeds the discount amount', () => {

    const itemA: Item = new Item({sku: 'A', price: 50});
    const discountA: Discount = new Discount({sku: 'A', amount: 2, discountPrice: 90});

    const receipt: Receipt = checkout
        .discount(discountA)
        .scan(itemA)
        .scan(itemA)
        .scan(itemA)
        .complete();

    expect(receipt.total).toBe(140);
  });

  it('should return multiple discounted prices for scanned items which exceed discount amount', () => {

    const itemA: Item = new Item({sku: 'A', price: 50});
    const discountA: Discount = new Discount({sku: 'A', amount: 2, discountPrice: 90});

    const receipt: Receipt = checkout
        .discount(discountA)
        .scan(itemA)
        .scan(itemA)
        .scan(itemA)
        .scan(itemA)
        .complete();

    expect(receipt.total).toBe(180);
  });
});