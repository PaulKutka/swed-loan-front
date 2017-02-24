
import {RouterModule, Routes} from "@angular/router";
import {CalculatorComponent} from "./calculator/calculator.component";

const APP_ROUTES: Routes = [
  {
    path: '',
    component: CalculatorComponent
  }
];

export const APP_ROUTES_PROVIDER = RouterModule.forRoot(APP_ROUTES);
