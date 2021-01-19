import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TypeDeServiceService {

  constructor(private client: HttpClient) { }

  // tslint:disable-next-line:typedef
  ajouterTypeDeService(typeDeService){
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.client.post('http://localhost:8081/type', typeDeService, httpOptions);
  }

  // tslint:disable-next-line:typedef
  voirTypeDeService() {
    return this.client.get('http://localhost:8081/type');
  }

  // tslint:disable-next-line:typedef
  supprimerTypeDeService(id) {
    return this.client.delete('http://localhost:8081/type/' + id);
  }
}
