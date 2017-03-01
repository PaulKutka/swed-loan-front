import {Injectable, Component} from '@angular/core';
import {Http, Headers} from "@angular/http";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AdminsPanelService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getLoansList(): Promise<any>{
    return this.http.get("https://api-swed-loan.herokuapp.com/loans")
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  changeStatus(status : string, id:number){
    return this.http.put("https://api-swed-loan.herokuapp.com/loans/"+id+"/edit", ({
      "status" : status,
    }), {headers: this.headers})
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any>{
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
