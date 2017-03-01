import {Injectable, Component} from '@angular/core';
import {Http} from "@angular/http";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AdminsPanelService {

  constructor(private http: Http) { }

  getLoansList(): Promise<any>{
    return this.http.get("https://api-swed-loan.herokuapp.com/loans")
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any>{
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
