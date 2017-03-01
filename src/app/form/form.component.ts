import {Component, OnInit} from "@angular/core";
import {FormService} from "./form.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [FormService]
})
export class FormComponent implements OnInit {

  trackingNumber : any;

  constructor(private service : FormService) { }

  ngOnInit() {
  }

  getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
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



    this.trackingNumber = this.getRandomInt(100, 999).toString()+''+this.getRandomInt(100, 999).toString()+''+this.getRandomInt(100, 999).toString();
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
income,
this.trackingNumber);
  }

}
