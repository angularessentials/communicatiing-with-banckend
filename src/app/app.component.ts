import { Component, VERSION, OnInit } from '@angular/core';
import { ExampleService } from './example.service';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { City, SendDataResponse } from './models';

@Component({
  selector: 'my-app',
  template: `
    <h1>Communicating with backend services using HTTP</h1>
    <pre>{{cities | json}}</pre>
    <button (click)="sendData()">Click to Send Data</button>
    <pre>{{sendDataResponse | json}}</pre>
  `,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  public cities: City[];
  public sendDataResponse: SendDataResponse;

  constructor(private exampleService: ExampleService) {
  }

  ngOnInit() {
    this.exampleService.getCities()
    .pipe(take(1))
    .subscribe(response => {
      this.cities = response;
    });
  }

  sendData() {
    this.exampleService.sendData({})
    .pipe(take(1))
    .subscribe(response => {
      this.sendDataResponse = response;
    })
  }
}
