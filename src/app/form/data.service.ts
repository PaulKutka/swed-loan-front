import {Injectable} from "@angular/core";
import {Country} from "./country";
import {State} from "./states";

@Injectable()
export class DataService {
  getCountries() {
    return [
      new Country(1, 'Lietuva' ),
      new Country(2, 'Lenkija' ),
      new Country(3, 'Švedija' )
    ];
  }

  getStates() {
    return [
      new State(1, 1, 'Vilnius' ),
      new State(2, 1, 'Kaunas' ),
      new State(3, 1, 'Panevežys'),
      new State(5, 2, 'Wilno' ),
      new State(6, 2, 'Gzegowš'),
      new State(7, 2, 'Rščern' ),
      new State(8, 3, 'Oslas' ),
      new State(9, 3, 'Oslas2' )
    ];
  }
}
