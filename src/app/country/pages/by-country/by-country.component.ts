import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css']
})
export class ByCountryComponent {
  term: string = '';
  error: boolean = false;
  countries: Country[] = [];
  suggestedCountries: Country[] = [];
  showSuggestions: boolean = false;

  constructor(private countryService: CountryService) {}

  search(term: string) {
    this.showSuggestions = false;
    this.error = false;
    this.term = term;
    this.countryService.searchCountry( term )
        .subscribe({
          next: (countries) => { this.countries = countries },
          error: (err) => { this.error = true, this.countries = [] }
        });
  }

  suggestions(term: string) {
    this.showSuggestions = true;
    this.error = false;
    this.term = term;

    this.countryService.searchCountry( term )
        .subscribe({
          next: (countries) => this.suggestedCountries = countries.splice(0, 5),
          error: (err) => this.suggestedCountries = []
        })
  }

  searchSuggested(term: string) {
    this.search(term);
  }

}
