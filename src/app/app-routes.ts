import {Routes, RouterModule} from "@angular/router";
import {FormComponent} from "./form/form.component";
import {CalculatorComponent} from "./calculator/calculator.component";
import {LoanTablesComponent} from "./loan-tables/loan-tables.component";
import {AdminPanelComponent} from "./admin-panel/admin-panel.component";

const APP_ROUTES: Routes = [
  {
    path: '',
    component: CalculatorComponent
  },
  {
    path: '',
    component: LoanTablesComponent
  },
  {
    path: 'formCompletion',
    component: FormComponent
  },
  {
    path: 'adminPanel',
    component: AdminPanelComponent
  }
];

export const APP_ROUTES_PROVIDER = RouterModule.forRoot(APP_ROUTES);
