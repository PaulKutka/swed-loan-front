import {Injectable} from "@angular/core";
import {PaymentsCalculated} from "./calculator/paymentsCalculated";
import {Payment} from "./calculator/payment";


@Injectable()
export class DataService {

  loanArray: Payment[] = [];

  setCalculatedPayments(loanSum: number, loanTime:number){
    this.loanArray = new PaymentsCalculated(loanSum, loanTime).calculateLoanDetails();

  }

  getCalculatedPayments() {
    return this.loanArray;
  }

}
