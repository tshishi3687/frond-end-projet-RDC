import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginService} from './login.service';
import {Constants} from '../objet';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  constructor(private client: HttpClient) { }
  logService: LoginService;
  // @ts-ignore
  private constance: Constants = new Constants();

  // tslint:disable-next-line:typedef
  ajouterPersonne(personne) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.client.post('http://localhost:8081/personne/creat', personne, httpOptions);
  }

  // tslint:disable-next-line:typedef
  verifIBAU(personne) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.parse(sessionStorage.getItem(this.constance.SessionJwtt))
      })
    };

    return this.client.post('http://localhost:8081/personne/ibau', personne, httpOptions);
  }

  // tslint:disable-next-line:typedef
  infoPersonne() {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.parse(sessionStorage.getItem(this.constance.SessionJwtt))
      })
    };
    return this.client.get('http://localhost:8081/personne/info_personne', httpOptions);
  }

  // tslint:disable-next-line:typedef
  voirPersonne(personne){
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.client.post('http://localhost:8081/personne/user', personne, httpOptions);
  }

  // tslint:disable-next-line:typedef
  voirSiExiste(personne){
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.client.post('http://localhost:8081/personne/email', personne, httpOptions);
  }

  // tslint:disable-next-line:typedef
  like(likeBien){
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.parse(sessionStorage.getItem(this.constance.SessionJwtt))
      })
    };

    return this.client.post('http://localhost:8081/personne/likes', likeBien, httpOptions);
  }

  // tslint:disable-next-line:typedef
  verifCompte(codeActivation){
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.parse(sessionStorage.getItem(this.constance.SessionJwtt))
      })
    };

    return this.client.post('http://localhost:8081/personne/activation_compte', codeActivation, httpOptions);
  }

  // tslint:disable-next-line:typedef
  changeMDP(info){
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.parse(sessionStorage.getItem(this.constance.SessionJwtt))
      })
    };

    return this.client.post('http://localhost:8081/personne/change_passe', info, httpOptions);
  }

  // tslint:disable-next-line:typedef
  mdpModif(modif){
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.parse(sessionStorage.getItem(this.constance.SessionJwtt))
      })
    };

    return this.client.post('http://localhost:8081/personne/mdp_modif', modif, httpOptions);
  }
}
