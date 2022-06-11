import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginService} from './login.service';
import {TypeDeService} from '../objet';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TypeDeServiceService {

  constructor(private client: HttpClient) { }

  // tslint:disable-next-line:typedef
  ajouterTypeDeService(typeDeService){
    return this.client.post(environment.serveur_url + '/type', typeDeService);
  }

  // tslint:disable-next-line:typedef
  voirTypeDeService() {
    return this.client.get<TypeDeService[]>(environment.serveur_url + '/type');
  }

  // tslint:disable-next-line:typedef
  supprimerTypeDeService(id) {
    return this.client.delete(environment.serveur_url + '/type/' + id);
  }
}
