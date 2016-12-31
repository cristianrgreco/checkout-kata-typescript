import {Discount} from './discount';


export class Discounts {

  private discounts: Map<string, Discount>;


  constructor(discounts?: Map<string, Discount>) {

    this.discounts = discounts || new Map<string, Discount>();
  }


  add(discount: Discount): Discounts {

    if (!discount) throw 'discount cannot be null';

    const discounts: Map<string, Discount> = new Map<string, Discount>(this.discounts);
    discounts.set(discount.sku, discount);

    return new Discounts(discounts);
  }

  get(sku: string): Discount {

    if (!sku) throw 'sku cannot be null';

    return this.discounts.get(sku) || null;
  }
}