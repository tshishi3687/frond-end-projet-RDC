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

    return this.client.post('http://localhost:8081/bien', bien, httpOptions);
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
    return this.client.delete('http://localhost:8081/bien/' + id);
  }

  // tslint:disable-next-line:typedef
  modifierBien(id, bien){
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.client.put('http://localhost:8081/bien/' + id, bien, httpOptions);
  }
}
