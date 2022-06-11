import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  constructor(private client: HttpClient) { }

  // tslint:disable-next-line:typedef
  ajouterPersonne(personne) {

    return this.client.post(environment.serveur_url + '/personne/creat', personne);
  }

  // tslint:disable-next-line:typedef
  verifIBAU(personne) {

    return this.client.post(environment.serveur_url + '/personne/ibau', personne);
  }

  // tslint:disable-next-line:typedef
  infoPersonne() {
    return this.client.get(environment.serveur_url + '/personne/info_personne');
  }

  // tslint:disable-next-line:typedef
  voirPersonne(personne){

    return this.client.post(environment.serveur_url + '/personne/user', personne);
  }

  // tslint:disable-next-line:typedef
  voirSiExiste(personne){

    return this.client.post(environment.serveur_url + '/personne/email', personne);
  }

  // tslint:disable-next-line:typedef
  like(likeBien){

    return this.client.post(environment.serveur_url + '/personne/likes', likeBien);
  }

  // tslint:disable-next-line:typedef
  verifCompte(codeActivation){

    return this.client.post(environment.serveur_url + '/personne/activation_compte', codeActivation);
  }

  // tslint:disable-next-line:typedef
  changeMDP(info){

    return this.client.post(environment.serveur_url + '/personne/change_passe', info);
  }

  // tslint:disable-next-line:typedef
  mdpModif(modif){

    return this.client.post(environment.serveur_url + '/personne/mdp_modif', modif);
  }
}
