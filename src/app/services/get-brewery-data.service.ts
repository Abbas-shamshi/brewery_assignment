import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetBreweryDataService {
  constructor(private http: HttpClient) {}

  getData() {
    let baseUrl = 'https://api.openbrewerydb.org/breweries?by_city=milwaukee';

    return this.http.get(baseUrl);
  }
}
