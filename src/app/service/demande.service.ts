import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  constructor(private client: HttpClient) { }

  // tslint:disable-next-line:typedef
  ajouterReservation(reservation){
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.client.post('http://localhost:8081/demande', reservation, httpOptions);
  }

  // tslint:disable-next-line:typedef
  voirDemandePersonne(demande){
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.client.post('http://localhost:8081/demande/user', demande, httpOptions);
  }

  // tslint:disable-next-line:typedef
  voirDemandeFait(demande) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.client.post('http://localhost:8081/demande/client', demande, httpOptions);
  }

  // tslint:disable-next-line:typedef
  modifDEmande(demande) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.client.put('http://localhost:8081/demande', demande, httpOptions);
  }
}