import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaysServiceService {

  constructor(private client: HttpClient) { }

  // tslint:disable-next-line:variable-name typedef
  voirPays() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.client.get('http://localhost:8081/pays');
  }
}
