import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginService} from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ImgService {

  constructor(private client: HttpClient, private service: LoginService) { }

  // tslint:disable-next-line:typedef
  ajouterImage(img) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.parse(sessionStorage.getItem(this.service.Sessionjwt))
      })
    };

    // tslint:disable-next-line:no-unused-expression
    // @ts-ignore
    return this.client.post(this.service.serveurAdresse + '/image/upload', img, httpOptions);
  }

  // tslint:disable-next-line:typedef
  modifImg(img) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.parse(sessionStorage.getItem(this.service.Sessionjwt))
      })
    };

    // tslint:disable-next-line:no-unused-expression
    // @ts-ignore
    return this.client.post(this.service.serveurAdresse + '/image/upload', img, httpOptions);
  }

  // tslint:disable-next-line:typedef
  rechercherParBienid(img) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.parse(sessionStorage.getItem(this.service.Sessionjwt))
      })
    };

    // tslint:disable-next-line:no-unused-expression
    // @ts-ignore
    return this.client.post(this.service.serveurAdresse + '/image/all', img, httpOptions);
  }

  // tslint:disable-next-line:typedef
  supprimerIMG(bien) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.parse(sessionStorage.getItem(this.service.Sessionjwt))
      })
    };
    // @ts-ignore
    return this.client.post(this.service.serveurAdresse + '/image/deleteimg', bien, httpOptions);
  }
}
