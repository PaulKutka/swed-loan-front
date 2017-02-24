
import {RouterModule, Routes} from "@angular/router";
import {CalculatorComponent} from "./calculator/calculator.component";
import {LoanTablesComponent} from "./loan-tables/loan-tables.component";

const APP_ROUTES: Routes = [
  {
    path: '',
    component: CalculatorComponent,
  },
  {
    path: '',
    component: LoanTablesComponent
  }
];

export const APP_ROUTES_PROVIDER = RouterModule.forRoot(APP_ROUTES);
