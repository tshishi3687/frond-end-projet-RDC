import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginService} from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ImageProvinceService {

  constructor(private client: HttpClient, private service: LoginService) { }

  // tslint:disable-next-line:typedef
  ajouterImageProvince(img) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.parse(sessionStorage.getItem(this.service.Sessionjwt))
      })
    };

    // tslint:disable-next-line:no-unused-expression
    // @ts-ignore
    return this.client.post(this.service.serveurAdresse + '/image_province/upload', img, httpOptions);
  }

  // tslint:disable-next-line:typedef
  getAll(img) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    // tslint:disable-next-line:no-unused-expression
    // @ts-ignore
    return this.client.post(this.service.serveurAdresse + '/image_province/all', img, httpOptions);
  }
}
