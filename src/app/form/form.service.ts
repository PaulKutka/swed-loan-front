import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FormService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http:Http) { }

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
    ) {
    return this.http
      .post("https://api-swed-loan.herokuapp.com/loans/add", ({
        "loanAmount": sum,
        "loanTerm": term,
        "loanPayday": day,
        "clientName": name,
        "clientSurname": lastName,
        "clientPersonalCode": personalCode,
        "clientPersonalDocumentNumber": documentNumber,
        "clientPersonalDocumentType": personalDocumentType,
        "country": country,
        "city": city,
        "address": address,
        "phoneNumber": phone,
        "email": email,
        "income": income,
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
