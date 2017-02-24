import {Component, OnInit} from "@angular/core";
import {LoanTablesComponent} from "../loan-tables/loan-tables.component";
import {PaymentsCalculated} from "./paymentsCalculated";
import {Payment} from "./payment";
import {DataService} from "../data-service";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent implements OnInit {

  loanSum: number;
  loanTime: number;

  constructor(private DataService: DataService) {
    setTimeout(() => this.loanSum = 500);
    setTimeout(() => this.loanTime = 1);
  }

  ngOnInit() {
  }

  calculatePayments(): void{
    this.DataService.setCalculatedPayments(this.loanSum, this.loanTime);
    new LoanTablesComponent(this.DataService).populatePayments();
  }

}
