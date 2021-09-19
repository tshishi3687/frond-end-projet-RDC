import { Injectable } from '@angular/core';
import {ConnexionComponent} from '../login/connexion/connexion.component';
import {Bien, Personne, Reservation} from '../objet';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements CanActivate{

  private infoPersonne: Personne;
  private bien: Bien;
  private reservation;
  private isAdmin = false;
  private isProprietaire = false;
  private isLocataire = false;
  private exist = false;

  constructor(private route: Router) { }

  redirection(personne: Personne): void{
    const locataire = 'Locataire';
    const proprietaire = 'Proprietaire';
    const admin = 'Admin';

    if (personne === null){
      this.exist = true;
      return ;
    }

    switch (personne.roll.nomRoll){
      case admin:
        this.isAdmin = true;
        this.infoPersonne = personne;
        sessionStorage.setItem('user-details', JSON.stringify(this.infoPersonne));
        this.route.navigateByUrl('/allBien');
        break;
      case locataire:
        this.isLocataire = true;
        this.infoPersonne = personne;
        sessionStorage.setItem('user-details', JSON.stringify(this.infoPersonne));
        this.route.navigateByUrl('/allBien');
        break;
      case proprietaire:
        this.isProprietaire = true;
        this.infoPersonne = personne;
        sessionStorage.setItem('user-details', JSON.stringify(this.infoPersonne));
        this.route.navigateByUrl('/allBien');
        break;
    }
  }

  biendb(bien: Bien): void{
    this.bien = bien;
    sessionStorage.setItem('bien-details', JSON.stringify(this.bien));
  }

  repBiendb(): Bien{
    if (this.isAuthenticated()) {
        const bien = JSON.parse(sessionStorage.getItem('bien-details'));
        return bien as Bien;
      }
  }

  reservationDB(reservation: Reservation): void{
    this.reservation = reservation;
    sessionStorage.setItem('reservation-details', JSON.stringify(this.reservation));
  }

  recReservation(): Reservation{
    if (this.isAuthenticated()) {
      const reservation = JSON.parse(sessionStorage.getItem('reservation-details'));
      return reservation as Reservation;
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
    this.route.navigateByUrl('/home');
  }

  AdminRolle(): boolean{
    return this.isAuthenticated && this.isAdmin;
  }

  isLocataireRoll(): boolean{
    return this.isAuthenticated() && this.isLocataire;
  }

  isProprietaireRoll(): boolean{
    return this.isAuthenticated() && this.isProprietaire;
  }

  // tslint:disable-next-line:max-line-length
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.isAuthenticated && this.isAdmin){
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
