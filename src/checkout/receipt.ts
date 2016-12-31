export class Receipt {

  private total_: number;
  private rewardPoints_: number;


  constructor(options: {total: number, rewardPoints: number}) {

    if (!options) throw 'options cannot be null';

    this.total_ = options.total;
    this.rewardPoints_ = options.rewardPoints;
  }


  get total(): number {
    return this.total_;
  }

  get rewardPoints(): number {
    return this.rewardPoints_;
  }
}