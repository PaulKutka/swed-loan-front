import {Component, OnInit} from "@angular/core";
import {Payment} from "./payment";
import {PaymentsCalculated} from "./paymentsCalculated";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent implements OnInit {

  loanSum: number = 0;
  loanTime: number = 0;

  loanArray: Payment[] = [];

  incomeAmountPerson: number = 0;
  incomeAmountSpouse: number = 0;

  constructor() {
    setTimeout(() => this.loanSum = 500);
    setTimeout(() => this.loanTime = 3);

    setTimeout(() => this.incomeAmountPerson = 245);
    setTimeout(() => this.incomeAmountSpouse = 245);
  }

  ngOnInit() {
  }

  calculatePayments(): void {
    this.loanArray = new PaymentsCalculated(this.loanSum, this.loanTime).loanArray;
    console.log(this.loanArray);
  }

}
