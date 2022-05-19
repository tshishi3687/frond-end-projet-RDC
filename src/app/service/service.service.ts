import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginService} from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private client: HttpClient, private service: LoginService) { }

  // tslint:disable-next-line:typedef
  ajouterService(service){
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.parse(sessionStorage.getItem(this.service.Sessionjwt))
      })
    };
    return this.client.post(this.service.serveurAdresse + '/service', service, httpOptions);
  }

  // tslint:disable-next-line:typedef
  voirService() {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.parse(sessionStorage.getItem(this.service.Sessionjwt))
      })
    };
    return this.client.get(this.service.serveurAdresse + '/service', httpOptions);
  }

  // tslint:disable-next-line:typedef
  voirServiceVille(bien) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.parse(sessionStorage.getItem(this.service.Sessionjwt))
      })
    };
    return this.client.post(this.service.serveurAdresse + '/service/ville', bien, httpOptions);
  }

  // tslint:disable-next-line:typedef
  supprimerService(id) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.parse(sessionStorage.getItem(this.service.Sessionjwt))
      })
    };
    return this.client.delete(this.service.serveurAdresse + '/service/' + id, httpOptions);
  }
}
