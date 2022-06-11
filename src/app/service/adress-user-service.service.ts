import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AdressUser} from '../objet';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdressUserServiceService {

  constructor(private client: HttpClient) { }

  // tslint:disable-next-line:variable-name typedef
  voirAdressUSer(personne) {

    return this.client.post<AdressUser>(environment.serveur_url + '/adress_user/user', personne);
  }

  // tslint:disable-next-line:variable-name typedef
  ajouterAdressUser(adress) {

    return this.client.post(environment.serveur_url + '/adress_user', adress);
  }
}
