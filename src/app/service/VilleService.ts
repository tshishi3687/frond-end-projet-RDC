import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Ville} from '../objet';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VilleService {

  constructor(private client: HttpClient) {}

  // tslint:disable-next-line:typedef
  ajouterVille(ville){

    return this.client.post(environment.serveur_url + '/ville', ville);
  }

  // tslint:disable-next-line:typedef
  voirVille() {
    return this.client.get<Ville[]>(environment.serveur_url + '/ville');
  }

  // tslint:disable-next-line:typedef
  supprimerVille(id) {
    return this.client.delete(environment.serveur_url + '/ville/' + id);
  }

  // tslint:disable-next-line:typedef
  ajouterImageVille(img) {

    // tslint:disable-next-line:no-unused-expression
    // @ts-ignore
    return this.client.post(environment.serveur_url + '/image_ville/upload', img);
  }
}
