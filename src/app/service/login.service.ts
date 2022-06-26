import { Injectable } from '@angular/core';
import {Personne, Validator} from '../objet';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

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
  public readonly SessionVerifValidator = 'validators-details';
  // tslint:disable-next-line:variable-name
  public readonly SessionContrat = 'contrat-details';
  // tslint:disable-next-line:variable-name
  public readonly Sessionjwt = 'jwt-details';
  // tslint:disable-next-line:variable-name
  public readonly SessionUserName = 'username-deails';
  public readonly logo = 'assets/img/rdc-map-flag.png';


  constructor(private route: Router) { }

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
        this.route.navigateByUrl('allBien');
        break;
      default:
        return ;
      }
    }
  }

  saveToken(jwt: string): void{
    sessionStorage.setItem(this.Sessionjwt, JSON.stringify(this.prefix + jwt));
  }

  repIBAU(): boolean{
    const validator = JSON.parse(sessionStorage.getItem(this.SessionVerifValidator)) as Validator;
    return validator.ibau;
  }

  repReservation(): boolean{
    const validator = JSON.parse(sessionStorage.getItem(this.SessionVerifValidator)) as Validator;
    return validator?.reservation;
  }

  repMel(): boolean{
    const validator = JSON.parse(sessionStorage.getItem(this.SessionVerifValidator)) as Validator;
    return validator?.mel;
  }

  repMyBien(): boolean{
    const validator = JSON.parse(sessionStorage.getItem(this.SessionVerifValidator)) as Validator;
    return validator?.biensNonMel;
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
    sessionStorage.removeItem(this.SessionVerifValidator);
    sessionStorage.removeItem(this.SessionREservation);
    sessionStorage.removeItem(this.SessionDemande);
    sessionStorage.removeItem(this.Sessionjwt);
    sessionStorage.removeItem(this.SessionUserName);
    this.route.navigateByUrl('/allBien');
  }

  AdminRolle(): boolean{
    const personne = (JSON.parse(sessionStorage.getItem(this.SessionUser)) as Personne);
    return this.isAuthenticated && personne?.role.includes(this.roll1);
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
      this.route.navigateByUrl('/allBien');
      return false;
    }
  }
}
