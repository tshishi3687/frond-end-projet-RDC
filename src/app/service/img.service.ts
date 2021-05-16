import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImgService {

  constructor(private client: HttpClient) { }

  // tslint:disable-next-line:typedef
  ajouterImage(img) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    // tslint:disable-next-line:no-unused-expression
    // @ts-ignore
    return this.client.post('http://localhost:8081/image/upppp', img);
  }
}
