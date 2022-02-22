import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Constants} from '../objet';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private client: HttpClient) { }
  // @ts-ignore
  private constance: Constants = new Constants();

  // tslint:disable-next-line:typedef
  ajouterService(service){
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.parse(sessionStorage.getItem(this.constance.SessionJwtt))
      })
    };
    return this.client.post('http://localhost:8081/service', service, httpOptions);
  }

  // tslint:disable-next-line:typedef
  voirService() {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.parse(sessionStorage.getItem(this.constance.SessionJwtt))
      })
    };
    return this.client.get('http://localhost:8081/service', httpOptions);
  }

  // tslint:disable-next-line:typedef
  voirServiceVille(bien) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.parse(sessionStorage.getItem(this.constance.SessionJwtt))
      })
    };
    return this.client.post('http://localhost:8081/service/ville', bien, httpOptions);
  }

  // tslint:disable-next-line:typedef
  supprimerService(id) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.parse(sessionStorage.getItem(this.constance.SessionJwtt))
      })
    };
    return this.client.delete('http://localhost:8081/service/' + id, httpOptions);
  }
}
