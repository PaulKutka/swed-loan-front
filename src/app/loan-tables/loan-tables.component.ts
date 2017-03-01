import {Component, OnInit, Input} from "@angular/core";
import {Payment} from "../calculator/payment";
import {$} from "protractor";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-loan-tables',
  templateUrl: './loan-tables.component.html',
  styleUrls: ['./loan-tables.component.css'],
  inputs: ['loanArrayOutput', 'loanSumOutput']
})

export class LoanTablesComponent implements OnInit {

  @Input('loanArrayOutput') loanArrayOutput: Payment[];
  @Input('loanSumOutput') loanSumOutput: number;

  ngOnInit() {

  }

}
