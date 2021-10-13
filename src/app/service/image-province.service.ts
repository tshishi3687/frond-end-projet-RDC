import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageProvinceService {

  constructor(private client: HttpClient) { }

  // tslint:disable-next-line:typedef
  ajouterImageProvince(img) {
    // @ts-ignore
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    // tslint:disable-next-line:no-unused-expression
    // @ts-ignore
    return this.client.post('http://localhost:8081/image_province/upload', img, httpOptions);
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
    return this.client.post('http://localhost:8081/image_province/all', img, httpOptions);
  }
}
