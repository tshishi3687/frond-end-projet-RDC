import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {max} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImgService {

  constructor(private client: HttpClient) { }

  // tslint:disable-next-line:typedef
  ajouterImage(img) {
    // @ts-ignore
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    // tslint:disable-next-line:no-unused-expression
    // @ts-ignore
    return this.client.post('http://localhost:8081/image/upload', img, httpOptions);
  }

  // tslint:disable-next-line:typedef
  rechercherParBienid(img) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    // tslint:disable-next-line:no-unused-expression
    // @ts-ignore
    return this.client.post('http://localhost:8081/image/all', img, httpOptions);
  }

  // tslint:disable-next-line:typedef
  supprimerIMG(bien) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };
    // @ts-ignore
    return this.client.post('http://localhost:8081/image/deleteimg', bien, httpOptions);
  }
}
