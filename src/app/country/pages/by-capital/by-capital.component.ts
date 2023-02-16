import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrls: ['./by-capital.component.css']
})
export class ByCapitalComponent {
  term: string = '';
  error: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  search(term: string) {
    this.error = false;
    this.term = term;
    this.countryService.searchCapital( term )
        .subscribe({
          next: (countries) => { this.countries = countries },
          error: (err) => { this.error = true, this.countries = [] }
        });
  }
}
