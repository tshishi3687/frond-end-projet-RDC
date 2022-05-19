import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginService} from './login.service';

@Injectable({
  providedIn: 'root'
})
export class LienPhotoService {

  constructor(private client: HttpClient, private service: LoginService) { }

  // tslint:disable-next-line:variable-name typedef
  ajouterLien_photo(lien_photo) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.client.post(this.service.serveurAdresse + '/lien_photo_bien', lien_photo, httpOptions);
  }
}
