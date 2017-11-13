import { Component, OnInit } from '@angular/core';
import { Flight } from '../entities/flight';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FlightService } from './flight.service';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  providers: [FlightService]
})
export class FlightSearchComponent implements OnInit {

  from: string;
  to: string;
  flights: Array<Flight> = [];
  selectedFlight: Flight;

  // private http: HttpClient;

  constructor(
    private flightService: FlightService) {
    // this.http = http;
  }

  ngOnInit() {
  }

  search(): void {
    this.flightService
        .find(this.from, this.to)
        .subscribe(
          flights => { this.flights = flights },
          err => { console.error('Error loading flights', err); }
        );

    /*
    this.flights.push({
      id: 4711,
      from: 'Graz',
      to: 'Kognito',
      date: '2017-11-13T17:00'
    });

    this.flights.push({
      id: 4712,
      from: 'Graz',
      to: 'Flagranti',
      date: '2017-11-13T17:30'
    });

    this.flights.push({
      id: 4713,
      from: 'Graz',
      to: 'Hamburg',
      date: '2017-11-13T18:00'
    });
    */
  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }

}
