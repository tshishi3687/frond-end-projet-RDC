import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Constants} from '../objet';

@Injectable({
  providedIn: 'root'
})
export class TypeDeBienService {

  constructor(private client: HttpClient) { }
  // @ts-ignore
  private constance: Constants = new Constants();

  // tslint:disable-next-line:typedef
  ajouterTypeDeBien(typeDeBien){
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.parse(sessionStorage.getItem(this.constance.SessionJwtt))
      })
    };
    return this.client.post('http://localhost:8081/typebien', typeDeBien, httpOptions);
  }

  // tslint:disable-next-line:typedef
  voirTypeDeBien() {
    return this.client.get('http://localhost:8081/typebien');
  }

  // tslint:disable-next-line:typedef
  supprimerTypeDeBien(id) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.parse(sessionStorage.getItem(this.constance.SessionJwtt))
      })
    };
    return this.client.delete('http://localhost:8081/typebien/' + id, httpOptions);
  }
}
