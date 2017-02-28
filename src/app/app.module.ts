import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {CalculatorComponent} from "./calculator/calculator.component";
import {LoanTablesComponent} from "./loan-tables/loan-tables.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {APP_ROUTES_PROVIDER} from "./app-routes";
import {FormComponent} from "./form/form.component";
import { LoanStatusComponent } from './loan-status/loan-status.component';
import {AdminPanelComponent} from "./admin-panel/admin-panel.component";

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    LoanTablesComponent,
    FormComponent,
    LoanStatusComponent,
    AdminPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTES_PROVIDER
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
