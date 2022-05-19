import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginService} from './login.service';

@Injectable({
  providedIn: 'root'
})
export class PaysServiceService {

  constructor(private client: HttpClient, private service: LoginService) { }

  // tslint:disable-next-line:variable-name typedef
  voirPays() {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.parse(sessionStorage.getItem(this.service.Sessionjwt))
      })
    };

    return this.client.get(this.service.serveurAdresse + '/pays', httpOptions);
  }
}
