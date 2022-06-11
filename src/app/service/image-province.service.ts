import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageProvinceService {

  constructor(private client: HttpClient) { }

  // tslint:disable-next-line:typedef
  ajouterImageProvince(img) {

    return this.client.post(environment.serveur_url + '/image_province/upload', img);
  }

  // tslint:disable-next-line:typedef
  getAll(img) {

    return this.client.post(environment.serveur_url + '/image_province/all', img);
  }
}
