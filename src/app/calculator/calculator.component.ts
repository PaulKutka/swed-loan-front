import { Component, OnInit } from '@angular/core';
import {variable} from "@angular/compiler/src/output/output_ast";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  loanSum: number;
  loanTime: number;

  loanPersonMoney: number;
  loanSpouseMoney: number;

  constructor() {
    // sutvarkyti !!
    setTimeout(() => this.loanSum = 245);
    setTimeout(() => this.loanTime = 1);
    setTimeout(() => this.loanPersonMoney = 500);
    setTimeout(() => this.loanSpouseMoney = 500);
  }

  ngOnInit() {
  }

  loanInformation(loanSum:number, loanPeriod:number):Array<Payment>{

    var paymentList:Payment[] = new Array();

    var leftSum:number = loanSum;
    var monthlyInterestRate:number = 0.16 / 12 ;

    var monthlySum:number = ((loanSum * monthlyInterestRate)/(1-Math.pow((1+monthlyInterestRate),(-1 * loanPeriod))))+ 0.7;

    for(var currentMonth:number = 0; currentMonth < loanPeriod; currentMonth++){
      paymentList.push(this.calculatePayment(currentMonth, leftSum, monthlySum, monthlyInterestRate));
      leftSum = leftSum - (monthlySum - (leftSum * monthlyInterestRate));
    }

    return paymentList;

}

  calculatePayment(currentMonth:number, leftSum:number, monthlySum:number, monthlyInterestRate:number):Payment{

    return new Payment(currentMonth+1, leftSum.toFixed(2), monthlySum.toFixed(2), (leftSum*monthlyInterestRate).toFixed(2));
}

}

class Payment{

    private _monthNumber:number;
    private _leftSum:string;
    private _monthlySum:string;
    private _monthlyInterestSum:string;
    usualServiceSum:number = 0.70;

  constructor(monthNumber: number, leftSum: string, monthlySum: string, monthlyInterestSum: string) {
    this._monthNumber = monthNumber;
    this._leftSum = leftSum;
    this._monthlySum = monthlySum;
    this._monthlyInterestSum = monthlyInterestSum;
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

}
