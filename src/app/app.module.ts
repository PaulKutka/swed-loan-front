import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import {AppRoutingModule} from "./app-routing.module";
import {CalculatorModule} from "./calculator/calculator.module";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
