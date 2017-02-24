import { Component, OnInit } from '@angular/core';
import {CalculatorService} from "./calculator.service";
import {variable} from "@angular/compiler/src/output/output_ast";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  categories:any;
  error: any;

  constructor() { }

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

  get leftSum(): number {
    return this._leftSum;
  }

  set leftSum(value: number) {
    this._leftSum = value;
  }

  get monthlySum(): number {
    return this._monthlySum;
  }

  set monthlySum(value: number) {
    this._monthlySum = value;
  }

  get monthlyInterestSum(): number {
    return this._monthlyInterestSum;
  }

  set monthlyInterestSum(value: number) {
    this._monthlyInterestSum = value;
  }

}
