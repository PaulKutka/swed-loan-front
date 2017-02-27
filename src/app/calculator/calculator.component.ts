import {Component, OnInit} from "@angular/core";
import {Payment} from "./payment";
import {PaymentsCalculated} from "./paymentsCalculated";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent implements OnInit {

  loanSum: number;
  loanTime: number;

  loanArray: Payment[] = [];

  incomeAmountPerson: number;
  incomeAmountSpouse: number;

  constructor() {
    setTimeout(() => this.loanSum = 500);
    setTimeout(() => this.loanTime = 3);

    setTimeout(() => this.incomeAmountPerson = 245);
    setTimeout(() => this.incomeAmountSpouse = 0);
  }

  ngOnInit() {
  }

  calculatePayments(): void {
    if(this.loanSum < 500){this.loanSum = 500}
    if(this.loanTime < 3){this.loanTime = 3}
    this.loanArray = new PaymentsCalculated(this.loanSum, this.loanTime).loanArray;
    console.log(this.loanArray);
  }

}
