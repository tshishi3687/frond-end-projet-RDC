import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginService} from './login.service';

@Injectable({
  providedIn: 'root'
})
export class BienService {

  constructor(private client: HttpClient, private service: LoginService) { }

  // tslint:disable-next-line:typedef
  ajouterBien(bien) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.parse(sessionStorage.getItem(this.service.Sessionjwt))
      })
    };

    return this.client.post(this.service.serveurAdresse + '/bien/creatt', bien, httpOptions);
  }

  // tslint:disable-next-line:typedef
  reservation(reservation) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.parse(sessionStorage.getItem(this.service.Sessionjwt))
      })
    };

    return this.client.post(this.service.serveurAdresse + '/bien/reservation', reservation, httpOptions);
  }

  // tslint:disable-next-line:typedef
  voirBienPersonne(personne){
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.parse(sessionStorage.getItem(this.service.Sessionjwt))
      })
    };

    return this.client.post(this.service.serveurAdresse + '/bien/user', personne, httpOptions);
  }

  // tslint:disable-next-line:typedef
  voirBien(){
    return this.client.get(this.service.serveurAdresse + '/bien');
  }

  // tslint:disable-next-line:typedef
  voirUneBien(id){
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.parse(sessionStorage.getItem(this.service.Sessionjwt))
      })
    };
    return this.client.get (this.service.serveurAdresse + '/bien/' + id, httpOptions);
  }

  // tslint:disable-next-line:typedef
  supprimerBien(id) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.parse(sessionStorage.getItem(this.service.Sessionjwt))
      })
    };
    // @ts-ignore
    return this.client.post(this.service.serveurAdresse + '/bien/deletebien', id, httpOptions);
  }

  // tslint:disable-next-line:typedef
  activate(bien){
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.parse(sessionStorage.getItem(this.service.Sessionjwt))
      })
    };
    return this.client.post(this.service.serveurAdresse + '/bien/acti', bien, httpOptions);
  }

  // tslint:disable-next-line:typedef
  envoiMail(bien){
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.parse(sessionStorage.getItem(this.service.Sessionjwt))
      })
    };
    return this.client.post(this.service.serveurAdresse + '/bien/env_mail', bien, httpOptions);
  }

  // tslint:disable-next-line:typedef
  envoiMailReservation(bien){
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.parse(sessionStorage.getItem(this.service.Sessionjwt))
      })
    };
    return this.client.post(this.service.serveurAdresse + '/bien/envo_mail', bien, httpOptions);
  }

}
