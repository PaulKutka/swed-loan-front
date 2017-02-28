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
    ) {
    return this.http
      .post("http://localhost:5050/loans/add", ({
        "loan_amount": sum,
        "loan_term": term,
        "loan_payday": day,
        "client_name": name,
        "client_surname": lastName,
        "client_personal_code": personalCode,
        "client_personal_document_number": documentNumber,
        "client_personal_document_type": personalDocumentType,
        "country": country,
        "city": city,
        "address": address,
        "phone_number": phone,
        "email": email,
      }), {headers: this.headers})
      .toPromise()
      // .then(res => res.json().data)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
