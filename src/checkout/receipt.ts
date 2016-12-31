export class Receipt {

  private total_: number;


  constructor(options: {total: number}) {

    if (!options) throw 'options cannot be null';

    this.total_ = options.total;
  }


  get total(): number {
    return this.total_;
  }
}