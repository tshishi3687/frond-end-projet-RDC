import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Constants} from '../objet';

@Injectable({
  providedIn: 'root'
})
export class PaysServiceService {

  constructor(private client: HttpClient) { }
  // @ts-ignore
  private constance: Constants = new Constants();

  // tslint:disable-next-line:variable-name typedef
  voirPays() {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.parse(sessionStorage.getItem(this.constance.SessionJwtt))
      })
    };

    return this.client.get('http://localhost:8081/pays', httpOptions);
  }
}
