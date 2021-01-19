import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VilleService {

  constructor(private client: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  ajouterVille(ville){
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
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
    return this.client.delete('http://localhost:8081/ville/' + id);
  }
}
