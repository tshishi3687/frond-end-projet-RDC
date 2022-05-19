import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginService} from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private client: HttpClient, private service: LoginService) { }

  // tslint:disable-next-line:typedef
  ajouterReservation(reservation){
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.client.post(this.service.serveurAdresse + '/reservations', reservation, httpOptions);
  }

  // tslint:disable-next-line:typedef
  voirReservationPersonne(reservation){
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.client.post(this.service.serveurAdresse + '/reservations/user', reservation, httpOptions);
  }

  // tslint:disable-next-line:typedef
  supprimerReservation(id) {
    return this.client.delete(this.service.serveurAdresse + '/reservation/' + id);
  }
}
