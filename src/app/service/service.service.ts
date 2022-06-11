import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Service} from '../objet';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private client: HttpClient) { }

  // tslint:disable-next-line:typedef
  ajouterService(service){
    return this.client.post(environment.serveur_url + '/service', service);
  }

  // tslint:disable-next-line:typedef
  voirService() {
    return this.client.get<Service[]>(environment.serveur_url + '/service');
  }

  // tslint:disable-next-line:typedef
  supprimerService(id) {
    return this.client.delete(environment.serveur_url + '/service/' + id);
  }
}
