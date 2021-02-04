import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private client: HttpClient) { }

  // tslint:disable-next-line:typedef
  ajouterReservation(reservation){
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.client.post('http://localhost:8081/reservations', reservation, httpOptions);
  }

  // tslint:disable-next-line:typedef
  voirReservationPersonne(reservation){
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.client.post('http://localhost:8081/reservation/user', reservation, httpOptions);
  }

  // tslint:disable-next-line:typedef
  supprimerReservation(id) {
    return this.client.delete('http://localhost:8081/reservation/' + id);
  }
}
