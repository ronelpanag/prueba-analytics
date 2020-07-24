import { CountryService } from './../../services/country.service';
import { Country } from './../../models/country';
import { Component, AfterViewInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styleUrls: ['./country-input.component.scss'],
  providers: [CountryService]
})
export class CountryInputComponent implements AfterViewInit {

  public selected: string;
  public countries: Country[] = [];

  @Output() countrySelected = new EventEmitter<string>();

  constructor(private countryService: CountryService) { }

  ngAfterViewInit() {
    this.getCountries();
  }

  getCountries() {
    this.countryService.getCountries()
      .subscribe(data => {
        this.countries = data;
        console.log(this.countries);
      });
  }

}
