import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Constants} from '../objet';

@Injectable({
  providedIn: 'root'
})
export class VilleService {

  constructor(private client: HttpClient) {}
  // @ts-ignore
  private constance: Constants = new Constants();

  // tslint:disable-next-line:typedef
  ajouterVille(ville){
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.parse(sessionStorage.getItem(this.constance.SessionJwtt))
      })
    };

    return this.client.post('http://localhost:8081/ville', ville, httpOptions);
  }

  // tslint:disable-next-line:typedef
  voirVille() {
    return this.client.get('http://localhost:8081/ville');
  }

  // tslint:disable-next-line:typedef
  supprimerVille(id) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.parse(sessionStorage.getItem(this.constance.SessionJwtt))
      })
    };
    return this.client.delete('http://localhost:8081/ville/' + id, httpOptions);
  }

  // tslint:disable-next-line:typedef
  ajouterImageVille(img) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.parse(sessionStorage.getItem(this.constance.SessionJwtt))
      })
    };

    // tslint:disable-next-line:no-unused-expression
    // @ts-ignore
    return this.client.post('http://localhost:8081/image_ville/upload', img, httpOptions);
  }
}
