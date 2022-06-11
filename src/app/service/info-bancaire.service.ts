import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {InfoBancaire} from '../objet';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InfoBancaireService {

  constructor(private client: HttpClient) { }

  // tslint:disable-next-line:typedef
  ajouterInfoBancaire(infoBancaire) {
    return this.client.post(environment.serveur_url + '/info_bancaire', infoBancaire);
  }

  // tslint:disable-next-line:typedef
  voirInfoBancairePersonne(personne) {
    return this.client.post<InfoBancaire>(environment.serveur_url + '/info_bancaire/user', personne);
  }
}
