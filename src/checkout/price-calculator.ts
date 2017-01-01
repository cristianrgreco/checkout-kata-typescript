import {Items} from '../item/items';
import {Discount} from '../discount/discount';
import {Discounts} from '../discount/discounts';


export class PriceCalculator {
  
  calculate(items: Items, discounts?: Discounts): number {

    if (!items) throw 'items cannot be null';

    return items.list().reduce((total, item) => {
      const quantity: number = items.getQuantity(item);
      const discount: Discount = discounts && discounts.get(item.sku);

      if (discount) {
        return total + this.calculateTotalWithDiscount(item.price, quantity, discount);
      } else {
        return total + this.calculateTotal(item.price, quantity);
      }
    }, 0);
  }


  private calculateTotal(price: number, quantity: number): number {

    return quantity * price;
  }

  private calculateTotalWithDiscount(price: number, quantity: number, discount: Discount): number {

    const multiplier: number = Math.floor(quantity / discount.amount);
    const remaining: number = quantity % discount.amount;

    return (multiplier * discount.discountPrice) + this.calculateTotal(price, remaining);
  }
}