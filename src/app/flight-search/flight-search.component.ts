import { Component, OnInit } from '@angular/core';
import { Flight } from '../entities/flight';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

  from: string;
  to: string;
  flights: Array<Flight> = [];
  selectedFlight: Flight;

  // private http: HttpClient;

  constructor(
    private http: HttpClient) {
    // this.http = http;
  }

  ngOnInit() {
  }

  search(): void {

    let url = 'http://www.angular.at/api/flight';

    let params = new HttpParams()
                      .set('from', this.from)
                      .set('to', this.to);

    let headers = new HttpHeaders()
                      .set('Accept', 'application/json');

    this.http
        .get<Flight[]>(url, {params, headers})
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
