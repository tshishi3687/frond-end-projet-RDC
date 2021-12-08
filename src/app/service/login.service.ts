import { Injectable } from '@angular/core';
import {Bien, Constants, Demande, Personne, Reservation} from '../objet';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements CanActivate{

  private bien: Bien;
  private reservation;
  private demande;
  private exist = false;
  // @ts-ignore
  private constance: Constants = new Constants();

  constructor(private route: Router) { }

  // tslint:disable-next-line:ban-types
  redirection(personne: Personne): void{
    // @ts-ignore
    if (personne.id <= 0){
      this.exist = true;
      return ;
    }

    // @ts-ignore
    if (personne.active){
      switch (personne.roll.nomRoll){
      case this.constance.roll1:
      case this.constance.roll2:
      case this.constance.roll3:
        sessionStorage.setItem(this.constance.SessionUser, JSON.stringify(personne));
        this.route.navigateByUrl('/allBien');
        break;
        default:
          this.exist = true;
          return ;
      }
    }
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

  demandeDB(demande: Demande): void{
    this.demande = demande;
    sessionStorage.setItem(this.constance.SessionDemande, JSON.stringify(this.demande));
  }

  recDemande(): Demande{
    if (this.isAuthenticated()) {
      const demande = JSON.parse(sessionStorage.getItem(this.constance.SessionDemande));
      return demande as Demande;
    }
  }

  reservationDB(reservation: Reservation): void{
    this.reservation = reservation;
    sessionStorage.setItem(this.constance.SessionREservation, JSON.stringify(this.reservation));
  }

  // recReservation(): Reservation{
  //   if (this.isAuthenticated()) {
  //     const reservation = JSON.parse(sessionStorage.getItem(this.constance.SessionREservation));
  //     return reservation as Reservation;
  //   }
  // }

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
    this.logoutBien();
    sessionStorage.removeItem(this.constance.SessionREservation);
    sessionStorage.removeItem(this.constance.SessionDemande);
    this.route.navigateByUrl('/home');
  }

  logoutBien(): void{
    sessionStorage.removeItem(this.constance.SessionBien);
  }

  AdminRolle(): boolean{
    const personne = (JSON.parse(sessionStorage.getItem(this.constance.SessionUser)) as Personne);
    return this.isAuthenticated && personne.roll.nomRoll.includes(this.constance.roll1);
  }

  isProprietaireRoll(): boolean{
    const personne = (JSON.parse(sessionStorage.getItem(this.constance.SessionUser)) as Personne);
    // tslint:disable-next-line:max-line-length
    return this.isAuthenticated() && (personne.roll.nomRoll.includes(this.constance.roll1) || personne.roll.nomRoll.includes(this.constance.roll2));
  }

  isLocataireRoll(): boolean{
    const personne = (JSON.parse(sessionStorage.getItem(this.constance.SessionUser)) as Personne);
    // tslint:disable-next-line:max-line-length
    return this.isAuthenticated() && (personne.roll.nomRoll.includes(this.constance.roll1) || personne.roll.nomRoll.includes(this.constance.roll3) || personne.roll.nomRoll.includes(this.constance.roll3));
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

  loginExiste(): boolean {
    return this.exist;
}
}
