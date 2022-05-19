import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginService} from './login.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {

  constructor(private client: HttpClient, private service: LoginService) {}

  // tslint:disable-next-line:typedef
  ajouterProvince(province) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.parse(sessionStorage.getItem(this.service.Sessionjwt))
      })
    };

    return this.client.post(this.service.serveurAdresse + '/province', province, httpOptions);
  }


  voirProvince(): Observable<any>{
    return this.client.get(this.service.serveurAdresse + '/province');
  }

  // tslint:disable-next-line:typedef
  supprimerProvince(id) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.parse(sessionStorage.getItem(this.service.Sessionjwt))
      })
    };
    return this.client.delete(this.service.serveurAdresse + '/province/' + id, httpOptions);
  }
}
