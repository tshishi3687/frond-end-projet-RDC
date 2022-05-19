import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginService} from './login.service';

@Injectable({
  providedIn: 'root'
})
export class TypeDeServiceService {

  constructor(private client: HttpClient, private service: LoginService) { }

  // tslint:disable-next-line:typedef
  ajouterTypeDeService(typeDeService){
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.parse(sessionStorage.getItem(this.service.Sessionjwt))
      })
    };
    return this.client.post(this.service.serveurAdresse + '/type', typeDeService, httpOptions);
  }

  // tslint:disable-next-line:typedef
  voirTypeDeService() {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.parse(sessionStorage.getItem(this.service.Sessionjwt))
      })
    };
    return this.client.get(this.service.serveurAdresse + '/type', httpOptions);
  }

  // tslint:disable-next-line:typedef
  supprimerTypeDeService(id) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.parse(sessionStorage.getItem(this.service.Sessionjwt))
      })
    };
    return this.client.delete(this.service.serveurAdresse + '/type/' + id, httpOptions);
  }
}
