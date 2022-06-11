import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Pays} from '../objet';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaysServiceService {

  constructor(private client: HttpClient) { }

  // tslint:disable-next-line:variable-name typedef
  voirPays() {

    return this.client.get<Pays[]>(environment.serveur_url + '/pays');
  }
}
