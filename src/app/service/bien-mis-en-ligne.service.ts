import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginService} from './login.service';

@Injectable({
  providedIn: 'root'
})
export class BienMisEnLigneService {

  constructor(private client: HttpClient, private service: LoginService) { }

  // tslint:disable-next-line:typedef
  voirContratPreneur(){
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.parse(sessionStorage.getItem(this.service.Sessionjwt))
      })
    };

    // @ts-ignore
    return this.client.get(this.service.serveurAdresse + '/contrat/mis_en_ligne', httpOptions);
  }

  // tslint:disable-next-line:typedef
  voirBienMisEnLignePreneur(personne){
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    // @ts-ignore
    return this.client.post(this.service.serveurAdresse + '/bienmisenligne/preneur', personne, httpOptions);
  }
}
