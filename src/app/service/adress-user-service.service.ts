import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdressUserServiceService {

  constructor(private client: HttpClient) { }

  // tslint:disable-next-line:variable-name typedef
  voirAdressUSer(personne) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.client.post('http://localhost:8081/adress_user/user', personne, httpOptions);
  }

  // tslint:disable-next-line:variable-name typedef
  ajouterAdressUser(adress) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.client.post('http://localhost:8081/adress_user', adress, httpOptions);
  }
}
