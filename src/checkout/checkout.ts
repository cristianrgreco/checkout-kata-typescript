import {Receipt} from './receipt';
import {Item} from '../item//item';
import {Items} from '../item//items';
import {Discount} from '../discount/discount';
import {Discounts} from '../discount/discounts';
import {PriceCalculator} from './price-calculator';
import {RewardPointCalculator} from './reward-point-calculator';


export class Checkout {

  private items: Items;
  private discounts: Discounts;

  private priceCalculator: PriceCalculator = new PriceCalculator();
  private rewardPointCalculator: RewardPointCalculator = new RewardPointCalculator();


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

    const total: number = this.priceCalculator.calculate(this.items, this.discounts);
    const rewardPoints: number = this.rewardPointCalculator.calculate(total);

    return new Receipt({
      total: total,
      rewardPoints: rewardPoints
    });
  }
}