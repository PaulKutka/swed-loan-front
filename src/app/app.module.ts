import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {CalculatorComponent} from "./calculator/calculator.component";
import {LoanTablesComponent} from "./loan-tables/loan-tables.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule, Http} from "@angular/http";
import {APP_ROUTES_PROVIDER} from "./app-routes";
import {FormComponent} from "./form/form.component";
import {LoanStatusComponent} from './loan-status/loan-status.component';
import {AdminPanelComponent} from "./admin-panel/admin-panel.component";
import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {Routes, RouterModule} from '@angular/router';
// AoT requires an exported function for factories
export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

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
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }

    }),
    RouterModule
    ,
    APP_ROUTES_PROVIDER
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
