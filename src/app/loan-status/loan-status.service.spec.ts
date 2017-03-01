import { TestBed, inject } from '@angular/core/testing';
import { LoanStatusService } from './loan-status.service';

describe('LoanStatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoanStatusService]
    });
  });

  it('should ...', inject([LoanStatusService], (service: LoanStatusService) => {
    expect(service).toBeTruthy();
  }));
});
