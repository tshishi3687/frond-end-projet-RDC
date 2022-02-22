import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Constants} from '../objet';

@Injectable({
  providedIn: 'root'
})
export class TypeDeServiceService {

  constructor(private client: HttpClient) { }
  // @ts-ignore
  private constance: Constants = new Constants();

  // tslint:disable-next-line:typedef
  ajouterTypeDeService(typeDeService){
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.parse(sessionStorage.getItem(this.constance.SessionJwtt))
      })
    };
    return this.client.post('http://localhost:8081/type', typeDeService, httpOptions);
  }

  // tslint:disable-next-line:typedef
  voirTypeDeService() {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.parse(sessionStorage.getItem(this.constance.SessionJwtt))
      })
    };
    return this.client.get('http://localhost:8081/type', httpOptions);
  }

  // tslint:disable-next-line:typedef
  supprimerTypeDeService(id) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.parse(sessionStorage.getItem(this.constance.SessionJwtt))
      })
    };
    return this.client.delete('http://localhost:8081/type/' + id, httpOptions);
  }
}
