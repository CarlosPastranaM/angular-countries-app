import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private urlApi: string = 'https://restcountries.com/v3.1';

  get httpParams() {
    return new HttpParams().set('fields', 'name,capital,cca2,flags,population');
  }

  constructor(private http: HttpClient) { }

  searchCountry(term: string): Observable<Country[]> {
    const url = `${this.urlApi}/name/${term}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  };

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.urlApi}/capital/${term}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  searchRegion(region: string): Observable<Country[]> {
    const url = `${this.urlApi}/region/${region}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  getCountryByAlpha(id: string): Observable<Country[]> {
    const url = `${this.urlApi}/alpha/${id}`;
    return this.http.get<Country[]>(url);
  }
  
}
