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
  loansStatus: any = 'Not found';
  error: any;

  constructor(private loanStatus: LoanStatusService) {
  }

  ngOnInit() {
  }

  searchLoan() {
    this.loansStatus = 'Not Found';
    this.loanStatus.getLoan(this.trackingNumber)
      .then(loansStatus => {
        this.loansStatus = loansStatus.status;
        console.log(loansStatus);
      }).catch(error => {
      this.error = error;
      console.log('error :(((');
    });
  };


}
