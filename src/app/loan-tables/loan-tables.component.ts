import {Component, OnInit, Input} from "@angular/core";
import {Payment} from "../calculator/payment";

@Component({
  selector: 'app-loan-tables',
  templateUrl: './loan-tables.component.html',
  styleUrls: ['./loan-tables.component.css'],
  inputs: ['loanArrayOutput', 'loanSumOutput']
})

export class LoanTablesComponent implements OnInit {

  @Input('loanArrayOutput') loanArrayOutput: Payment[];
  @Input('loanSumOutput') loanSumOutput: number;

  constructor() {

  }

  ngOnInit() {
  }

}
