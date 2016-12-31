import {Receipt} from './receipt';
import {Item} from './item';
import {Items} from './items';
import {Discount} from './discount';
import {Discounts} from './discounts';


export class Checkout {

  private items: Items;
  private discounts: Discounts;


  constructor(items?: Items, discounts?: Discounts) {

    this.items = items || new Items();
    this.discounts = discounts || new Discounts();
  }


  scan(item: Item): Checkout {

    return new Checkout(this.items.add(item), this.discounts);
  }

  discount(discount: Discount): Checkout {

    return new Checkout(this.items, this.discounts.add(discount));
  }

  complete(): Receipt {    

    return new Receipt({
      total: Array.from(this.items.list()).reduce((total, item) => {
        const quantity: number = this.items.getQuantity(item);
        const discount: Discount = this.discounts.get(item.sku);

        if (discount) {
          const multiplier: number = Math.floor(quantity / discount.amount);
          const remaining: number = quantity % discount.amount;

          total = total + (multiplier * discount.discountPrice);
          total = total + (remaining * item.price);
        } else {
          total = total + (quantity * item.price);
        }

        return total;
      }, 0)
    });
  }
}