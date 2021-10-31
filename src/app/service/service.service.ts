import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private client: HttpClient) { }

  // tslint:disable-next-line:typedef
  ajouterService(service){
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.client.post('http://localhost:8081/service', service, httpOptions);
  }

  // tslint:disable-next-line:typedef
  voirService() {
    return this.client.get('http://localhost:8081/service');
  }

  // tslint:disable-next-line:typedef
  voirServiceVille(bien) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.client.post('http://localhost:8081/service/ville', bien, httpOptions);
  }

  // tslint:disable-next-line:typedef
  supprimerService(id) {
    return this.client.delete('http://localhost:8081/service/' + id);
  }
}
