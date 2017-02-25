import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";
import {CalculatorComponent} from "./calculator/calculator.component";
import {APP_ROUTES_PROVIDER} from "./app-routes";
import {LoanTablesComponent} from './loan-tables/loan-tables.component';
import {DataService} from "./data-service";

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    LoanTablesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTES_PROVIDER
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
