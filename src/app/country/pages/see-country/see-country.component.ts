import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';

import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styleUrls: ['./see-country.component.css']
})
export class SeeCountryComponent implements OnInit {

  country!: Country;

  constructor(private activatedRoute: ActivatedRoute, 
              private countryService: CountryService) { }

  ngOnInit() {
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.countryService.getCountryByAlpha(id)),
        // tap(console.log)
      )
      .subscribe( country => {
        this.country = country[0]
      })

    // this.activatedRoute.params
    //   .subscribe( ({ id }) => {
    //     this.countryService.getCountryByAlpha(id)
    //       .subscribe( country => {
    //         console.log(country);
    //       });
    //   });
  }
}
