import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Province} from '../objet';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {

  constructor(private client: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  ajouterProvince(province) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.client.post('http://localhost:8081/province', province, httpOptions);
  }

  // tslint:disable-next-line:typedef
  voirProvince(){
    return this.client.get('http://localhost:8081/province');
  }

  // tslint:disable-next-line:typedef
  voirUneProvince(id){
    return this.client.get ('http://localhost:8081/province/' + id);
  }

  // tslint:disable-next-line:typedef
  supprimerProvince(id) {
    return this.client.delete('http://localhost:8081/province/' + id);
  }
}
