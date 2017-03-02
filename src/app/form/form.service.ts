import { Injectable } from '@angular/core';
import {Http, Headers, Response} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {Form} from "./form";


@Injectable()
export class FormService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http:Http) { }



  createLoan(model : Form, trackingNumber : string){
    console.log({
      "loanAmount": model.sum,
      "loanTerm": model.term,
      "loanPayday": model.payDay,
      "clientName": model.name,
      "clientSurname": model.surName,
      "clientPersonalCode": model.personalCode,
      "clientPersonalDocumentNumber": model.documentNumber,
      "clientPersonalDocumentType": model.documentType,
      "country": model.country,
      "city": model.city,
      "address": model.address,
      "phoneNumber": model.phoneNumber,
      "email": model.email,
      "income": model.income,
      "trackingNumber": trackingNumber,
    });
    return this.http.post("https://api-swed-loan.herokuapp.com/loans/add", ({
      "loanAmount": model.sum,
      "loanTerm": model.term,
      "loanPayday": model.payDay,
      "clientName": model.name,
      "clientSurname": model.surName,
      "clientPersonalCode": model.personalCode,
      "clientPersonalDocumentNumber": model.documentNumber,
      "clientPersonalDocumentType": model.documentType,
      "country": model.country,
      "city": model.city,
      "address": model.address,
      "phoneNumber": model.phoneNumber,
      "email": model.email,
      "income": model.income,
      "trackingNumber": trackingNumber,
    }), {headers: this.headers})
      .toPromise()
      // .then(res => res.json().data)
      .catch(this.handleError);
  };

  create(
    sum:number,
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
    income: number,
    trackingNumber: string,
    ) {
    console.log({
      "loanAmount": +sum,
      "loanTerm": +term,
      "loanPayday": +day,
      "clientName": name,
      "clientSurname": lastName,
      "clientPersonalCode": +personalCode,
      "clientPersonalDocumentNumber": +documentNumber,
      "clientPersonalDocumentType": personalDocumentType,
      "country": country,
      "city": city,
      "address": address,
      "phoneNumber": phone,
      "email": email,
      "income": +income,
      "trackingNumber": trackingNumber,
    });
    return this.http
      .post("https://api-swed-loan.herokuapp.com/loans/add", ({
        "loanAmount": +sum,
        "loanTerm": +term,
        "loanPayday": +day,
        "clientName": name,
        "clientSurname": lastName,
        "clientPersonalCode": +personalCode,
        "clientPersonalDocumentNumber": +documentNumber,
        "clientPersonalDocumentType": personalDocumentType,
        "country": country,
        "city": city,
        "address": address,
        "phoneNumber": phone,
        "email": email,
        "income": +income,
        "trackingNumber": trackingNumber,
        // "loanAmount": 500,
        // "loanTerm": 25,
        // "loanPayday": 25,
        // "clientName": "Vardenis",
        // "clientSurname": "Pavardenis",
        // "clientPersonalCode": 39008189963,
        // "clientPersonalDocumentNumber": 12345678,
        // "clientPersonalDocumentType": "Pasas",
        // "country": "Lithuania",
        // "city": "Vilnius",
        // "address": "Perkūnkiemio g. 5",
        // "phoneNumber": "864445696",
        // "email": "potato@gmail.com",
        // "income": 245,
      }), {headers: this.headers})
      .toPromise()
      // .then(res => res.json().data)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  // "loanAmount": sum,
  // "loanTerm": term,
  // "loanPayday": day,
  // "clientName": name,
  // "clientSurname": lastName,
  // "clientPersonalCode": personalCode,
  // "clientPersonalDocumentNumber": documentNumber,
  // "clientPersonalDocumentType": personalDocumentType,
  // "country": country,
  // "city": city,
  // "address": address,
  // "phoneNumber": phone,
  // "email": email,
  // "income": 245,
}
