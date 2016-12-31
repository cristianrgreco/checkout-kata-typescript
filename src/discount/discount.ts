export class Discount {

  private sku_: string;
  private amount_: number;
  private discountPrice_: number;


  constructor(options: {sku: string, amount: number, discountPrice: number}) {

    if (!options) throw 'options cannot be null';

    this.sku_ = options.sku;
    this.amount_ = options.amount;
    this.discountPrice_ = options.discountPrice;
  }


  get sku(): string {
    return this.sku_;
  }

  get amount(): number {
    return this.amount_;
  }

  get discountPrice(): number {
    return this.discountPrice_;
  }
}