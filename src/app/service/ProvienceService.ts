import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginService} from './login.service';
import {Observable} from 'rxjs';
import {Province} from '../objet';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {

  constructor(private client: HttpClient) {}

  // tslint:disable-next-line:typedef
  ajouterProvince(province) {

    return this.client.post(environment.serveur_url + '/province', province);
  }


  voirProvince(): Observable<any>{
    return this.client.get<Province[]>(environment.serveur_url + '/province');
  }

  // tslint:disable-next-line:typedef
  supprimerProvince(id) {
    return this.client.delete(environment.serveur_url + '/province/' + id);
  }
}
