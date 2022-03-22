import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Constants} from '../objet';

@Injectable({
  providedIn: 'root'
})
export class BienMisEnLigneService {

  constructor(private client: HttpClient) { }
  // @ts-ignore
  private constance: Constants = new Constants();

  // voir la list de bien_mis_ligne pour le bailleur
  // tslint:disable-next-line:typedef
  voirContratPreneur(){
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.parse(sessionStorage.getItem(this.constance.SessionJwtt))
      })
    };

    // @ts-ignore
    return this.client.get('http://localhost:8081/contrat/mis_en_ligne', httpOptions);
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
