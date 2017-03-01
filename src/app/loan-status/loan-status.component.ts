import {Component, OnInit} from '@angular/core';
import {LoanStatusService} from "./loan-status.service";

@Component({
  selector: 'app-loan-status',
  templateUrl: './loan-status.component.html',
  styleUrls: ['./loan-status.component.css'],
  providers: [LoanStatusService]
})
export class LoanStatusComponent implements OnInit {

  trackingNumber: string = "";
  loansStatus: any = ' ';
  error: any;

  constructor(private loanStatus: LoanStatusService) {
  }

  ngOnInit() {
  }

  searchLoan() {
    this.loanStatus.getLoan(this.trackingNumber)
      .then(loansStatus => {
        this.loansStatus = loansStatus;
        console.log(loansStatus);
      }).catch(error => {
      this.error = error;
      console.log('error :(((');
    });
  };


}
