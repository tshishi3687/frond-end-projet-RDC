import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TypeDeBienService {

  constructor(private client: HttpClient) { }

  // tslint:disable-next-line:typedef
  ajouterTypeDeBien(typeDeBien){
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.client.post('http://localhost:8081/type_bien', typeDeBien, httpOptions);
  }

  // tslint:disable-next-line:typedef
  voirTypeDeBien() {
    return this.client.get('http://localhost:8081/type_bien');
  }

  // tslint:disable-next-line:typedef
  supprimerTypeDeBien(id) {
    return this.client.delete('http://localhost:8081/type_bien/' + id);
  }
}
