/**
 * Created by paulius on 17.2.24.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CalculatorComponent} from "./calculator/calculator.component";
import {AppComponent} from "./app.component";

const appRoutes: Routes = [
  {
    path: '',
    component: CalculatorComponent
  },
  {
    path: 'calculator',
    component: CalculatorComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
