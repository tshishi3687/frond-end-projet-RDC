import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Constants} from '../objet';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {

  constructor(private client: HttpClient) {}
  // @ts-ignore
  private constance: Constants = new Constants();

  // tslint:disable-next-line:typedef
  ajouterProvince(province) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.parse(sessionStorage.getItem(this.constance.SessionJwtt))
      })
    };

    return this.client.post('http://localhost:8081/province', province, httpOptions);
  }

  // tslint:disable-next-line:typedef
  voirProvince(){
    return this.client.get('http://localhost:8081/province');
  }

  // tslint:disable-next-line:typedef
  supprimerProvince(id) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.parse(sessionStorage.getItem(this.constance.SessionJwtt))
      })
    };
    return this.client.delete('http://localhost:8081/province/' + id, httpOptions);
  }
}
