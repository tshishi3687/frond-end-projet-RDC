import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginService} from './login.service';

@Injectable({
  providedIn: 'root'
})
export class VilleService {

  constructor(private client: HttpClient, private service: LoginService) {}

  // tslint:disable-next-line:typedef
  ajouterVille(ville){
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.parse(sessionStorage.getItem(this.service.Sessionjwt))
      })
    };

    return this.client.post(this.service.serveurAdresse + '/ville', ville, httpOptions);
  }

  // tslint:disable-next-line:typedef
  voirVille() {
    return this.client.get(this.service.serveurAdresse + '/ville');
  }

  // tslint:disable-next-line:typedef
  supprimerVille(id) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.parse(sessionStorage.getItem(this.service.Sessionjwt))
      })
    };
    return this.client.delete(this.service.serveurAdresse + '/ville/' + id, httpOptions);
  }

  // tslint:disable-next-line:typedef
  ajouterImageVille(img) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: JSON.parse(sessionStorage.getItem(this.service.Sessionjwt))
      })
    };

    // tslint:disable-next-line:no-unused-expression
    // @ts-ignore
    return this.client.post(this.service.serveurAdresse + '/image_ville/upload', img, httpOptions);
  }
}
