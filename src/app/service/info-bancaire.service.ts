import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginService} from './login.service';

@Injectable({
  providedIn: 'root'
})
export class InfoBancaireService {

  constructor(private client: HttpClient, private service: LoginService) { }

  // tslint:disable-next-line:typedef
  ajouterInfoBancaire(infoBancaire) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.parse(sessionStorage.getItem(this.service.Sessionjwt))
      })
    };

    return this.client.post(this.service.serveurAdresse + '/info_bancaire', infoBancaire, httpOptions);
  }

  // tslint:disable-next-line:typedef
  voirInfoBancairePersonne(personne) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.parse(sessionStorage.getItem(this.service.Sessionjwt))
      })
    };

    return this.client.post(this.service.serveurAdresse + '/info_bancaire/user', personne, httpOptions);
  }
}
