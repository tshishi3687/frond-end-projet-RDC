import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginService} from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AdressUserServiceService {

  constructor(private client: HttpClient, private service: LoginService) { }

  // tslint:disable-next-line:variable-name typedef
  voirAdressUSer(personne) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.parse(sessionStorage.getItem(this.service.Sessionjwt))
      })
    };

    return this.client.post(this.service.serveurAdresse + '/adress_user/user', personne, httpOptions);
  }

  // tslint:disable-next-line:variable-name typedef
  ajouterAdressUser(adress) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.parse(sessionStorage.getItem(this.service.Sessionjwt))
      })
    };

    return this.client.post(this.service.serveurAdresse + '/adress_user', adress, httpOptions);
  }
}
