import { Component, OnInit } from '@angular/core';
import {CalculatorService} from "./calculator.service";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  categories:any;
  error: any;

  constructor() { }

  ngOnInit() {
  }

  

}
