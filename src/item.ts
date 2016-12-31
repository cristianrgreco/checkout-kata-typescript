export class Item {

  private sku_: string;
  private price_: number;


  constructor(options: {sku: string, price: number}) {
    
    if (!options) throw 'options cannot be null';

    this.sku_ = options.sku;
    this.price_ = options.price;
  }


  get sku(): string {
    return this.sku_;
  }

  get price(): number {
    return this.price_;
  }
}