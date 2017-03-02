import {Routes, RouterModule} from "@angular/router";
import {AdminPanelComponent} from "./admin-panel/admin-panel.component";

const APP_ROUTES: Routes = [
  {
    path: 'adminPanel',
    component: AdminPanelComponent
  }
];

export const APP_ROUTES_PROVIDER = RouterModule.forRoot(APP_ROUTES);
