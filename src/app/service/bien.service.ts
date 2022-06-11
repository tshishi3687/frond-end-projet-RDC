import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {TryListAllBiens} from '../objet';

@Injectable({
  providedIn: 'root'
})
export class BienService {

  constructor(private client: HttpClient) { }

  // tslint:disable-next-line:typedef
  ajouterBien(bien) {

    return this.client.post(environment.serveur_url + '/bien/creatt', bien);
  }

  // tslint:disable-next-line:typedef
  reservation(reservation) {

    return this.client.post(environment.serveur_url + '/bien/reservation', reservation);
  }

  // tslint:disable-next-line:typedef
  voirBienPersonne(personne){

    return this.client.post(environment.serveur_url + '/bien/user', personne);
  }

  // tslint:disable-next-line:typedef
  voirBien(filtre: TryListAllBiens){
    let params = new HttpParams();
    params = params.append('page', filtre.page);
    params = params.append('typeId', filtre.typeId);
    params = params.append('provinceId', filtre.provinceId);
    params = params.append('villeId', filtre.villeId);
    return this.client.get(environment.serveur_url + '/bien/allBiens', { params });
  }

  // tslint:disable-next-line:typedef
  infoBien(idBien: number){
    return this.client.post(environment.serveur_url + '/bien/infoBien', idBien );
  }

  // tslint:disable-next-line:typedef
  countBiens(){
    return this.client.get(environment.serveur_url + '/bien/count');
  }

  // tslint:disable-next-line:typedef
  voirUneBien(id){
    return this.client.get (environment.serveur_url + '/bien/' + id);
  }

  // tslint:disable-next-line:typedef
  supprimerBien(id) {
    return this.client.post(environment.serveur_url + '/bien/deletebien', id);
  }

  // tslint:disable-next-line:typedef
  activate(bien){
    return this.client.post(environment.serveur_url + '/bien/acti', bien);
  }

  // tslint:disable-next-line:typedef
  annulCMEL(payPal){
    return this.client.post(environment.serveur_url + '/bien/annul_cmel', payPal);
  }

  // tslint:disable-next-line:typedef
  envoiMail(bien){
    return this.client.post(environment.serveur_url + '/bien/env_mail', bien);
  }

  // tslint:disable-next-line:typedef
  envoiMailReservation(bien){
    return this.client.post(environment.serveur_url + '/bien/envo_mail', bien);
  }

}
