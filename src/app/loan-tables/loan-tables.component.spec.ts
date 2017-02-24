import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanTablesComponent } from './loan-tables.component';

describe('LoanTablesComponent', () => {
  let component: LoanTablesComponent;
  let fixture: ComponentFixture<LoanTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
