import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginService} from './login.service';
import {Constants} from '../objet';

@Injectable({
  providedIn: 'root'
})
export class BienService {

  constructor(private client: HttpClient) { }
  // @ts-ignore
  private constance: Constants = new Constants();

  // tslint:disable-next-line:typedef
  ajouterBien(bien) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.parse(sessionStorage.getItem(this.constance.SessionJwtt))
      })
    };

    return this.client.post('http://localhost:8081/bien/creatt', bien, httpOptions);
  }

  // tslint:disable-next-line:typedef
  reservation(reservation) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.parse(sessionStorage.getItem(this.constance.SessionJwtt))
      })
    };

    return this.client.post('http://localhost:8081/bien/reservation', reservation, httpOptions);
  }

  // tslint:disable-next-line:typedef
  voirBienPersonne(personne){
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.parse(sessionStorage.getItem(this.constance.SessionJwtt))
      })
    };

    return this.client.post('http://localhost:8081/bien/user', personne, httpOptions);
  }

  // tslint:disable-next-line:typedef
  voirBien(){
    return this.client.get('http://localhost:8081/bien');
  }

  // tslint:disable-next-line:typedef
  voirUneBien(id){
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.parse(sessionStorage.getItem(this.constance.SessionJwtt))
      })
    };
    return this.client.get ('http://localhost:8081/bien/' + id, httpOptions);
  }

  // tslint:disable-next-line:typedef
  supprimerBien(id) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.parse(sessionStorage.getItem(this.constance.SessionJwtt))
      })
    };
    // @ts-ignore
    return this.client.post('http://localhost:8081/bien/deletebien', id, httpOptions);
  }

  // tslint:disable-next-line:typedef
  activate(bien){
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.parse(sessionStorage.getItem(this.constance.SessionJwtt))
      })
    };
    return this.client.post('http://localhost:8081/bien/acti', bien, httpOptions);
  }

  // tslint:disable-next-line:typedef
  envoiMail(bien){
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.parse(sessionStorage.getItem(this.constance.SessionJwtt))
      })
    };
    return this.client.post('http://localhost:8081/bien/env_mail', bien, httpOptions);
  }

  // tslint:disable-next-line:typedef
  envoiMailReservation(bien){
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.parse(sessionStorage.getItem(this.constance.SessionJwtt))
      })
    };
    return this.client.post('http://localhost:8081/bien/envo_mail', bien, httpOptions);
  }

}
