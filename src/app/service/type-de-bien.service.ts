import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TypeDeBien} from '../objet';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TypeDeBienService {

  constructor(private client: HttpClient) { }
  // tslint:disable-next-line:typedef
  ajouterTypeDeBien(typeDeBien){
    return this.client.post(environment.serveur_url + '/typebien', typeDeBien);
  }

  // tslint:disable-next-line:typedef
  voirTypeDeBien() {
    return this.client.get<TypeDeBien[]>(environment.serveur_url + '/typebien');
  }

  // tslint:disable-next-line:typedef
  supprimerTypeDeBien(id) {
    return this.client.delete(environment.serveur_url + '/typebien/' + id);
  }
}
