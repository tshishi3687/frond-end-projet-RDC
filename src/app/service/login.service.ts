import { Injectable } from '@angular/core';
import {ConnexionComponent} from '../login/connexion/connexion.component';
import {Bien, Personne} from '../objet';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements CanActivate{

  private infoPersonne: Personne;
  private bien: Bien;
  private isAdmin = false;
  private isClient = false;
  private exist = false;

  constructor(private route: Router) { }

  redirection(personne: Personne): void{
    const client = 'client';
    const admin = 'admin';

    if (personne === null){
      this.exist = true;
      return ;
    }

    switch (personne.status){
      case admin:
        this.isAdmin = true;
        this.infoPersonne = personne;
        sessionStorage.setItem('user-details', JSON.stringify(this.infoPersonne));
        this.route.navigateByUrl('/admin');
        break;
      case client:
        this.isClient = true;
        this.infoPersonne = personne;
        sessionStorage.setItem('user-details', JSON.stringify(this.infoPersonne));
        this.route.navigateByUrl('/voirBienPersonne');
        break;
    }
  }

  // tslint:disable-next-line:typedef
  biendb(bien: Bien){
    this.bien = bien;
    sessionStorage.setItem('bien-details', JSON.stringify(this.bien));
  }

  repBiendb(): Bien{
    if (this.isAuthenticated()) {
        const bien = JSON.parse(sessionStorage.getItem('bien-details'));
        return bien as Bien;
      }
  }

  client(): Personne{
    if (this.isAuthenticated()){
      const personne = JSON.parse(sessionStorage.getItem('user-details'));
      return personne as Personne;
    }
  }

  isAuthenticated(): boolean {
    return sessionStorage.getItem('user-details') !== null;
  }

  logout(): void{
    sessionStorage.removeItem('user-details');
    this.route.navigateByUrl('/connexion');
  }

  AdminRolle(): boolean{
    if (this.isAuthenticated && this.isAdmin){
      return true;
    }else{
      return false;
    }
  }

  ClientRolle(): boolean{
    if (this.isAuthenticated && this.isClient){
      return true;
    }else{
      this.logout();
      return false;
    }
  }

  // tslint:disable-next-line:max-line-length
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.isAuthenticated && this.isAdmin){
      return true;
    }else{
      this.logout();
      this.route.navigateByUrl('/connexion');
      return false;
    }
  }

  loginExiste(): boolean {
    return this.exist;
}
}
