import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {max} from 'rxjs/operators';
import {LoginService} from './login.service';
import {Constants} from '../objet';

@Injectable({
  providedIn: 'root'
})
export class ImgService {

  constructor(private client: HttpClient) { }
  logService: LoginService;
  // @ts-ignore
  private constance: Constants = new Constants();

  // tslint:disable-next-line:typedef
  ajouterImage(img) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.parse(sessionStorage.getItem(this.constance.SessionJwtt))
      })
    };

    // tslint:disable-next-line:no-unused-expression
    // @ts-ignore
    return this.client.post('http://localhost:8081/image/upload', img, httpOptions);
  }

  // tslint:disable-next-line:typedef
  modifImg(img) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.parse(sessionStorage.getItem(this.constance.SessionJwtt))
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
        Authorization: JSON.parse(sessionStorage.getItem(this.constance.SessionJwtt))
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
        Authorization: JSON.parse(sessionStorage.getItem(this.constance.SessionJwtt))
      })
    };
    // @ts-ignore
    return this.client.post('http://localhost:8081/image/deleteimg', bien, httpOptions);
  }
}
