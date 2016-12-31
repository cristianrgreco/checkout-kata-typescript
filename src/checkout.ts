import {Receipt} from './receipt';
import {Item} from './item';
import {Discount} from './discount';


export class Checkout {

  private items: Map<Item, number> = new Map<Item, number>();
  private discounts: Map<string, Discount> = new Map<string, Discount>();


  constructor(items?: Map<Item, number>, discounts?: Map<string, Discount>) {

    if (items) {
      this.items = items;
    }

    if (discounts) {
      this.discounts = discounts;
    }
  }


  scan(item: Item): Checkout {

    const items: Map<Item, number> = new Map<Item, number>(this.items);

    const quantity: number = items.get(item);
    if (quantity === undefined) {
      items.set(item, 1);
    } else {
      items.set(item, quantity + 1);
    }

    return new Checkout(items, this.discounts);
  }

  discount(discount: Discount): Checkout {

    const discounts: Map<string, Discount> = new Map<string, Discount>(this.discounts);
    discounts.set(discount.sku, discount);

    return new Checkout(this.items, discounts);
  }

  complete(): Receipt {    

    return new Receipt({
      total: Array.from(this.items.keys()).reduce((total, item) => {
        const itemQuantity: number = this.items.get(item);
        const discount: Discount = this.discounts.get(item.sku);

        if (discount) {
          const multiplier: number = Math.floor(itemQuantity / discount.amount);
          const remaining: number = itemQuantity % discount.amount;

          total = total + (multiplier * discount.discountPrice);
          total = total + (remaining * item.price);
        } else {
          total = total + (itemQuantity * item.price);
        }

        return total;
      }, 0)
    });
  }
}