import { Component, OnInit } from '@angular/core';

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

}
