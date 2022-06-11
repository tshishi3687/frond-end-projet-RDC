import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImgService {

  constructor(private client: HttpClient) { }

  // tslint:disable-next-line:typedef
  ajouterImage(img) {
    return this.client.post(environment.serveur_url + '/image/upload', img);
  }

}
