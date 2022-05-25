import { Injectable } from '@angular/core';
import {Bien, Contrat, Mdp, Personne} from '../objet';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {PersonneService} from './personne.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements CanActivate{

  private prefix = 'Bearer ';
  // tslint:disable-next-line:variable-name
  public readonly roll1 = 'Admin';
  // tslint:disable-next-line:variable-name
  public readonly roll2 = 'Client';
  // tslint:disable-next-line:variable-name
  public readonly SessionUser = 'user-details';
  // tslint:disable-next-line:variable-name
  public readonly SessionBien = 'bien-details';
  // tslint:disable-next-line:variable-name
  public readonly SessionDemande = 'demande-details';
  // tslint:disable-next-line:variable-name
  public readonly SessionREservation = 'reservation-details';
  // tslint:disable-next-line:variable-name
  public readonly SessionVerifIBAU = 'IBAU-details';
  // tslint:disable-next-line:variable-name
  public readonly SessionContrat = 'contrat-details';
  // tslint:disable-next-line:variable-name
  public readonly Sessionjwt = 'jwt-details';
  // tslint:disable-next-line:variable-name
  public readonly SessionUserName = 'username-deails';
  // tslint:disable-next-line:variable-name
  serveurAdresse = 'http://localhost:8081';


  constructor(private route: Router,
              private personneService: PersonneService) { }

  href = this.route.url;
  // tslint:disable-next-line:ban-types
  redirection(personne: Personne): void{
    // @ts-ignore
    if (personne.id <= 0){
      return ;
    }

    // @ts-ignore
    if (personne.active){

      switch (personne.role){
      case this.roll1:
      case this.roll2:
        sessionStorage.setItem(this.SessionUser, JSON.stringify(personne));
        this.verifIBAU();
        if (this.repIBAU()){
          this.route.navigateByUrl('allBien');
        }else {
          this.route.navigateByUrl('/Client/profil');
        }
        break;
      default:
        return ;
      }
    }
  }

  saveToken(jwt: string): void{
    sessionStorage.setItem(this.Sessionjwt, JSON.stringify(this.prefix + jwt));
  }

  verifIBAU(): void{
    this.personneService.verifIBAU(this.client()).subscribe((reponse: boolean) => {
      sessionStorage.setItem(this.SessionVerifIBAU, JSON.stringify(reponse));
    }, reponse => alert('Impossible de verifier l\'IBAU'));
  }

  repIBAU(): boolean{
    return JSON.parse(sessionStorage.getItem(this.SessionVerifIBAU)) as boolean;
  }


  client(): Personne{
    if (this.isAuthenticated()){
      const personne = JSON.parse(sessionStorage.getItem(this.SessionUser));
      return personne as Personne;
    }
  }

  isAuthenticated(): boolean {
    return sessionStorage.getItem(this.SessionUser) !== null;
  }

  logout(): void{
    sessionStorage.removeItem(this.SessionUser);
    sessionStorage.removeItem(this.SessionVerifIBAU);
    sessionStorage.removeItem(this.SessionREservation);
    sessionStorage.removeItem(this.SessionDemande);
    sessionStorage.removeItem(this.Sessionjwt);
    sessionStorage.removeItem(this.SessionUserName);
    this.route.navigateByUrl('/allBien');
  }

  AdminRolle(): boolean{
    const personne = (JSON.parse(sessionStorage.getItem(this.SessionUser)) as Personne);
    return this.isAuthenticated && personne.role.includes(this.roll1);
  }

  isClient(): boolean{
    const personne = (JSON.parse(sessionStorage.getItem(this.SessionUser)) as Personne);
    // tslint:disable-next-line:max-line-length
    return this.isAuthenticated() && (personne.role.includes(this.roll1) || personne.role.includes(this.roll2));
  }

  viderCache(): void{
    sessionStorage.removeItem(this.SessionContrat);
    sessionStorage.removeItem(this.SessionBien);
  }

  // tslint:disable-next-line:max-line-length
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.AdminRolle()){
      return true;
    }else{
      this.logout();
      this.route.navigateByUrl('/home');
      return false;
    }
  }
}
