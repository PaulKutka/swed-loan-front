export class Payment {

  private _monthNumber: number;
  private _leftSum: string;
  private _monthlySum: string;
  private _monthlyInterestSum: string;
  private _usualServiceSum: string;

  constructor(monthNumber: number, leftSum: string, monthlySum: string, monthlyInterestSum: string, usualServiceSum: string) {
    this._monthNumber = monthNumber;
    this._leftSum = leftSum;
    this._monthlySum = monthlySum;
    this._monthlyInterestSum = monthlyInterestSum;
    this._usualServiceSum = usualServiceSum;
  }

  get monthNumber(): number {
    return this._monthNumber;
  }

  set monthNumber(value: number) {
    this._monthNumber = value;
  }

  get leftSum(): string {
    return this._leftSum;
  }

  set leftSum(value: string) {
    this._leftSum = value;
  }

  get monthlySum(): string {
    return this._monthlySum;
  }

  set monthlySum(value: string) {
    this._monthlySum = value;
  }

  get monthlyInterestSum(): string {
    return this._monthlyInterestSum;
  }

  set monthlyInterestSum(value: string) {
    this._monthlyInterestSum = value;
  }

  get usualServiceSum(): string {
    return this._usualServiceSum;
  }

  set usualServiceSum(value: string) {
    this._usualServiceSum = value;
  }

}
