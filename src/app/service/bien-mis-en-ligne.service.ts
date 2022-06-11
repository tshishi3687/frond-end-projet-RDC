import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BienMisEnLigneService {

  constructor(private client: HttpClient) { }

  // tslint:disable-next-line:typedef
  voirContratPreneur(){

    return this.client.get(environment.serveur_url + '/contrat/mis_en_ligne');
  }
}
