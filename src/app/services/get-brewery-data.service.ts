import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetBreweryDataService {
  constructor(private http: HttpClient) {}

  getData(brewType?: string) {
    let baseUrl = 'https://api.openbrewerydb.org/breweries?by_city=milwaukee';
    if (brewType) {
      baseUrl = baseUrl.concat(`&by_type=${brewType}`);
    }

    return this.http.get(baseUrl);
  }
}
