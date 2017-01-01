import {RewardPointCalculator} from './reward-point-calculator';


describe('RewardPointCalculator', () => {

  let calculator: RewardPointCalculator;


  beforeEach(() => {
    
    calculator = new RewardPointCalculator();
  });


  it('should return zero reward points if the total price is less than the required price', () => {

    expect(calculator.calculate(99)).toBe(0);
  });

  it('should return one reward point if the total price is equal to the required price', () => {

    expect(calculator.calculate(100)).toBe(1);
  });

  it('should return multiple reward points for every multiple of the required price', () => {

    expect(calculator.calculate(300)).toBe(3);
  });

  it('should raise an error if total is undefined', () => {

    expect(() => calculator.calculate(undefined)).toThrow('total cannot be null');
  });

  it('should raise an error if total is null', () => {

    expect(() => calculator.calculate(null)).toThrow('total cannot be null');
  });
});