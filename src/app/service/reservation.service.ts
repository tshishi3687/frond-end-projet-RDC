import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Contrat} from '../objet';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private client: HttpClient) { }

  // tslint:disable-next-line:typedef
  ajouterReservation(reservation){

    return this.client.post(environment.serveur_url + '/bien/reservation', reservation);
  }

  // tslint:disable-next-line:typedef
  details(id){

    return this.client.post(environment.serveur_url + '/bien/details', id);
  }

  // tslint:disable-next-line:typedef
  dispo(reservation){

    return this.client.post(environment.serveur_url + '/bien/dispo', reservation);
  }

  // tslint:disable-next-line:typedef
  voirReservation(){

    // @ts-ignore
    return this.client.get<Contrat[]>(environment.serveur_url + '/bien/reservations');
  }
}
