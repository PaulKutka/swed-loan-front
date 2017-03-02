import {Routes, RouterModule} from "@angular/router";
import {AdminPanelComponent} from "./admin-panel/admin-panel.component";
import {CalculatorComponent} from "./calculator/calculator.component";

const APP_ROUTES: Routes = [
  {
    path: '',
    component: CalculatorComponent
  },
  {
    path: 'adminPanel',
    component: AdminPanelComponent
  }
];

export const APP_ROUTES_PROVIDER = RouterModule.forRoot(APP_ROUTES);
