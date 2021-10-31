import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BienService {

  constructor(private client: HttpClient) { }

  // tslint:disable-next-line:typedef
  ajouterBien(bien) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.client.post('http://localhost:8081/bien/creatt', bien, httpOptions);
  }

  // tslint:disable-next-line:typedef
  voirBienPersonne(personne){
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.client.post('http://localhost:8081/bien/user', personne, httpOptions);
  }

  // tslint:disable-next-line:typedef
  voirBien(){
    return this.client.get('http://localhost:8081/bien');
  }

  // tslint:disable-next-line:typedef
  voirUneBien(id){
    return this.client.get ('http://localhost:8081/bien/' + id);
  }

  // tslint:disable-next-line:typedef
  supprimerBien(id) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };
    // @ts-ignore
    return this.client.post('http://localhost:8081/bien/deletebien', id, httpOptions);
  }

}
