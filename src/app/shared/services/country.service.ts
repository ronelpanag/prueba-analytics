import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'any'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  // https://restcountries.eu/rest/v2/name/dominican%20republic?fullText=true&fields=flag;name
  getCountries() {
    return this.http.get<Country[]>('https://restcountries.eu/rest/v2/all?fields=name;flag');
  }
}
