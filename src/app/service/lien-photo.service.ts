import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LienPhotoService {

  constructor(private client: HttpClient) { }

  // tslint:disable-next-line:variable-name typedef
  ajouterLien_photo(lien_photo) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.client.post('http://localhost:8081/lien_photo', lien_photo, httpOptions);
  }
}
