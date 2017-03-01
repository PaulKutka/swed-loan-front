import {Component, OnInit} from "@angular/core";
import {FormService} from "./form.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [FormService]
})
export class FormComponent implements OnInit {

  constructor(private service : FormService) { }

  ngOnInit() {
  }

  onSubmit(sum:number,
           term:number,
           day:number,
           name:string,
            lastName:string,
            personalCode:number,
            personalDocumentType:string,
            documentNumber:number,
             country:string,
            city:string,
            address:string,
            phone:number,
            email:string,
           income:number,
  ){


    // console.log(country, term, day, name, lastName, personalCode, personalDocumentType, documentNumber, country, city, address,
    // phone, email);

this.service.create(sum,
  term,
  day,
  name,
  lastName,
  personalCode,
  personalDocumentType,
  documentNumber,
 country,
  city,
  address,
  phone,
  email,
income);
  }

}
