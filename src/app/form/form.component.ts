import {Component, OnInit} from "@angular/core";
import {FormService} from "./form.service";
import {DataService} from "./data.service";
import {State} from "./states";
import {Country} from "./country";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [FormService]
})
export class FormComponent implements OnInit {

  selectedCountry:Country = new Country(0, 'Lietuva');
  countries: Country[];
  states: State[];

  constructor(private _dataService: DataService , private service : FormService) {
    this.countries = this._dataService.getCountries();
  }

  onSelect(countryid) {
    this.states = this._dataService.getStates().filter((item)=> item.countryid == countryid);
  }
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
