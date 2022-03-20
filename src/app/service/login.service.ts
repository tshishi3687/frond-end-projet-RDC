import { Injectable } from '@angular/core';
import {Bien, Constants, Contrat, Personne, Reservation} from '../objet';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {PersonneService} from './personne.service';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements CanActivate{

  private prefix = 'Bearer ';
  private bien: Bien;
  private contrat: Contrat;
  // @ts-ignore
  private constance: Constants = new Constants();

  constructor(private route: Router,
              private personneService: PersonneService) { }

  // tslint:disable-next-line:ban-types
  redirection(personne: Personne): void{
    // @ts-ignore
    if (personne.id <= 0){
      return ;
    }

    // @ts-ignore
    if (personne.active){

      switch (personne.role){
      case this.constance.roll1:
      case this.constance.roll2:
        sessionStorage.setItem(this.constance.SessionUser, JSON.stringify(personne));
        this.verifIBAU();
        this.route.navigateByUrl('/allBien');
        break;
        default:
          return ;
      }
    }
  }

  saveToken(jwt: string): void{
    sessionStorage.setItem(this.constance.SessionJwtt, JSON.stringify(this.prefix + jwt));
  }

  repToken(): string{
    const jwt = JSON.parse(sessionStorage.getItem(this.constance.SessionJwtt));
    return jwt as string;
  }

  repUserName(): string{
    const username = JSON.parse(sessionStorage.getItem(this.constance.SessionJwtt));
    return username as string;
  }

  verifIBAU(): void{
    this.personneService.verifIBAU(this.client()).subscribe((reponse: boolean) => {
      sessionStorage.setItem(this.constance.SessionVerifIBAU, JSON.stringify(reponse));
    }, reponse => alert('Impossible de verifier l\'IBAU'));
  }

  repIBAU(): boolean{
    return JSON.parse(sessionStorage.getItem(this.constance.SessionVerifIBAU)) as boolean;
  }

  biendb(bien: Bien): void{
    this.bien = bien;
    sessionStorage.setItem(this.constance.SessionBien, JSON.stringify(this.bien));
  }

  repBiendb(): Bien{
    if (this.isAuthenticated()) {
        const bien = JSON.parse(sessionStorage.getItem(this.constance.SessionBien));
        return bien as Bien;
      }
  }

  contratDB(contrat: Contrat): void{
    this.contrat = contrat;
    sessionStorage.setItem(this.constance.SessionContrat, JSON.stringify(this.contrat));
  }

  repContrat(): Contrat{
    if (this.isAuthenticated()) {
      const contrat = JSON.parse(sessionStorage.getItem(this.constance.SessionContrat));
      return contrat as Contrat;
    }
  }

  client(): Personne{
    if (this.isAuthenticated()){
      const personne = JSON.parse(sessionStorage.getItem(this.constance.SessionUser));
      return personne as Personne;
    }
  }

  isAuthenticated(): boolean {
    return sessionStorage.getItem(this.constance.SessionUser) !== null;
  }

  logout(): void{
    sessionStorage.removeItem(this.constance.SessionUser);
    sessionStorage.removeItem(this.constance.SessionVerifIBAU);
    this.logoutBien();
    sessionStorage.removeItem(this.constance.SessionREservation);
    sessionStorage.removeItem(this.constance.SessionDemande);
    sessionStorage.removeItem(this.constance.Sessionjwt);
    sessionStorage.removeItem(this.constance.SessionUserName);
    this.route.navigateByUrl('/home');
  }

  logoutBien(): void{
    sessionStorage.removeItem(this.constance.SessionBien);
  }

  AdminRolle(): boolean{
    const personne = (JSON.parse(sessionStorage.getItem(this.constance.SessionUser)) as Personne);
    return this.isAuthenticated && personne.role.includes(this.constance.roll1);
  }

  isClient(): boolean{
    const personne = (JSON.parse(sessionStorage.getItem(this.constance.SessionUser)) as Personne);
    // tslint:disable-next-line:max-line-length
    return this.isAuthenticated() && (personne.role.includes(this.constance.roll1) || personne.role.includes(this.constance.roll2));
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
