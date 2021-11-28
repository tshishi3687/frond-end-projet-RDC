import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  constructor(private client: HttpClient) { }

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
  voirPersonne(personne){
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.client.post('http://localhost:8081/personne/user', personne, {observe: 'response'});
  }

  // tslint:disable-next-line:typedef
  voirSiExiste(personne){
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.client.post('http://localhost:8081/personne/email', personne);
  }

  // tslint:disable-next-line:typedef
  like(likeBien){
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.client.post('http://localhost:8081/personne/likes', likeBien, httpOptions);
  }

  // tslint:disable-next-line:typedef
  verifCompte(codeActivation){
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.client.post('http://localhost:8081/personne/activation_compte', codeActivation, httpOptions);
  }
}
