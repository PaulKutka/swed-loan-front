import {Injectable} from "@angular/core";
import {Country} from "./country";
import {State} from "./states";

@Injectable()
export class DataService {
  getCountries() {
    return [
      new Country(1, 'Lithuania' ),
      new Country(2, 'Poland' ),
      new Country(3, 'Sweden' )
    ];
  }

  getStates() {
    return [
      new State(1, 1, 'Vilnius' ),
      new State(2, 1, 'Kaunas' ),
      new State(3, 1, 'Panevežys'),
      new State(4, 2, 'Warsaw' ),
      new State(5, 2, 'Gdansk'),
      new State(6, 2, 'Zakopane' ),
      new State(7, 3, 'Stockholm' ),
      new State(8, 3, 'Gothenburg' ),
      new State(9, 3, 'Malmö' )
    ];
  }
}
