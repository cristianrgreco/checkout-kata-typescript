export class RewardPointCalculator {

  private pencePerPoint: number = 100;


  calculate(total: number): number {

    if (total === null || total === undefined) throw 'total cannot be null';
    
    return Math.floor(total / this.pencePerPoint);
  }
}