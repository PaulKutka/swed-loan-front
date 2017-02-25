import {Component, OnInit} from "@angular/core";
import {Payment} from "../calculator/payment";
import {DataService} from "../data-service";

@Component({
  selector: 'app-loan-tables',
  templateUrl: './loan-tables.component.html',
  styleUrls: ['./loan-tables.component.css']
})

export class LoanTablesComponent implements OnInit{

  loanArray: Payment[] = [];

  constructor(private DataService: DataService){

  }

  ngOnInit(){

  }

  populatePayments(){
    this.loanArray = this.DataService.getCalculatedPayments();
    console.log(this.loanArray);
  }

}
