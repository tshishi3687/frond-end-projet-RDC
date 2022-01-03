import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BienMisEnLigneService {

  constructor(private client: HttpClient) { }

  // voir la list de bien_mis_ligne pour le bailleur
  // tslint:disable-next-line:typedef
  voirBienMisEnLigneBailleur(personne){
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    // @ts-ignore
    return this.client.post('http://localhost:8081/bienmisenligne/bailler', personne, httpOptions);
  }

  // voir la list de bien_mis_ligne pour le preneur
  // tslint:disable-next-line:typedef
  voirBienMisEnLignePreneur(personne){
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    // @ts-ignore
    return this.client.post('http://localhost:8081/bienmisenligne/preneur', personne, httpOptions);
  }
}
