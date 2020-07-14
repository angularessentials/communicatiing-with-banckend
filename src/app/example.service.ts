import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { City, SendDataResponse } from './models';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  constructor(private httpClient: HttpClient) {}

  getCities(): Observable<City[]> {
    return this.httpClient.get<City[]>('https://run.mocky.io/v3/18d80512-edf9-433d-905d-2b51e4c7400f');
  }

  sendData(payload: any) {
    return this.httpClient.post<SendDataResponse>('https://run.mocky.io/v3/e354e0f0-df76-46e1-8790-ee7adbf85c81', payload);
  }
}