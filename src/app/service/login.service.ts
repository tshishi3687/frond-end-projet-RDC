import { Injectable } from '@angular/core';
import {Bien, Demande, Personne, Reservation} from '../objet';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements CanActivate{

  private infoPersonne: Personne;
  private bien: Bien;
  private reservation;
  private demande;
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

  demandeDB(demande: Demande): void{
    this.demande = demande;
    sessionStorage.setItem('demande-details', JSON.stringify(this.demande));
  }

  recDemande(): Demande{
    if (this.isAuthenticated()) {
      const demande = JSON.parse(sessionStorage.getItem('demande-details'));
      return demande as Demande;
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
    this.logoutBien();
    sessionStorage.removeItem('reservation-details');
    // tslint:disable-next-line:no-unused-expression
    this.logoutDemande;
    this.route.navigateByUrl('/home');
  }

  logoutDemande(): void{
    sessionStorage.removeItem('demande-details');
  }

  logoutBien(): void{
    sessionStorage.removeItem('bien-details');
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
// export class LoginService implements CanActivate{
//
//   private authority: string;
//   private bien: Bien;
//   private reservation;
//   private demande;
//   private exist = false;
//
//   constructor(private route: Router) { }
//
//   // tslint:disable-next-line:ban-types
//   redirection(personne: Personne): void{
//     const locataire = 'Locataire';
//     const proprietaire = 'Proprietaire';
//     const admin = 'Admin';
//
//     // @ts-ignore
//     if (personne.id <= 0){
//       this.exist = true;
//       return ;
//     }
//
//     // tslint:disable-next-line:prefer-for-of
//     for (const authority of personne.authorities){
//       // @ts-ignore
//       this.authority = authority.authority;
//     }
//     // @ts-ignore
//     if (personne.enabled){
//       // @ts-ignore
//       switch (this.authority){
//       case admin:
//         sessionStorage.setItem('user-details', btoa(JSON.stringify(personne)));
//         this.route.navigateByUrl('/allBien');
//         break;
//       case locataire:
//         sessionStorage.setItem('user-details', btoa(JSON.stringify(personne)));
//         this.route.navigateByUrl('/allBien');
//         break;
//       case proprietaire:
//         sessionStorage.setItem('user-details', btoa(JSON.stringify(personne)));
//         this.route.navigateByUrl('/allBien');
//         break;
//       }
//     }
//   }
//
//   biendb(bien: Bien): void{
//     this.bien = bien;
//     sessionStorage.setItem('bien-details', btoa(JSON.stringify(this.bien)));
//   }
//
//   repBiendb(): Bien{
//     if (this.isAuthenticated()) {
//         const bien = JSON.parse(atob(sessionStorage.getItem('bien-details')));
//         return bien as Bien;
//       }
//   }
//
//   demandeDB(demande: Demande): void{
//     this.demande = demande;
//     sessionStorage.setItem('demande-details', btoa(JSON.stringify(this.demande)));
//   }
//
//   recDemande(): Demande{
//     if (this.isAuthenticated()) {
//       const demande = JSON.parse(atob(sessionStorage.getItem('demande-details')));
//       return demande as Demande;
//     }
//   }
//
//   reservationDB(reservation: Reservation): void{
//     this.reservation = reservation;
//     sessionStorage.setItem('reservation-details', btoa(JSON.stringify(this.reservation)));
//   }
//
//   recReservation(): Reservation{
//     if (this.isAuthenticated()) {
//       const reservation = JSON.parse(sessionStorage.getItem('reservation-details'));
//       return reservation as Reservation;
//     }
//   }
//
//   client(): Personne{
//     if (this.isAuthenticated()){
//       const personne = JSON.parse(atob(sessionStorage.getItem('user-details')));
//       return personne as Personne;
//     }
//   }
//
//   isAuthenticated(): boolean {
//     return sessionStorage.getItem('user-details') !== null;
//   }
//
//   logout(): void{
//     sessionStorage.removeItem('user-details');
//     this.logoutBien();
//     sessionStorage.removeItem('reservation-details');
//     sessionStorage.removeItem('demande-details');
//     this.route.navigateByUrl('/home');
//   }
//
//   logoutBien(): void{
//     sessionStorage.removeItem('bien-details');
//   }
//
//   AdminRolle(): boolean{
//     const personne = (JSON.parse(atob(sessionStorage.getItem('user-details'))));
//     for (const authority of personne.authorities){
//       // @ts-ignore
//       this.authority = authority.authority;
//     }
//     return this.isAuthenticated && this.authority.includes('Admin');
//   }
//
//   nomRoll(): string{
//     const personne = (JSON.parse(atob(sessionStorage.getItem('user-details'))));
//     for (const authority of personne.authorities){
//       // @ts-ignore
//       this.authority = authority.authority;
//     }
//     return this.authority;
//   }
//
//   isProprietaireRoll(): boolean{
//     const personne = (JSON.parse(atob(sessionStorage.getItem('user-details'))));
//     for (const authority of personne.authorities){
//       // @ts-ignore
//       this.authority = authority.authority;
//     }
//     return this.isAuthenticated() && (this.authority.includes('Admin') || this.authority.includes('Proprietaire'));
//   }
//
//   isLocataireRoll(): boolean{
//     const personne = (JSON.parse(atob(sessionStorage.getItem('user-details'))));
//     for (const authority of personne.authorities){
//       // @ts-ignore
//       this.authority = authority.authority;
//     }
//     // tslint:disable-next-line:max-line-length
//     return this.isAuthenticated() && (this.authority.includes('Admin') || this.authority.includes('Proprietaire') || this.authority.includes('Locataire'));
//   }
//
//   // tslint:disable-next-line:max-line-length
//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     if (this.AdminRolle()){
//       return true;
//     }else{
//       this.logout();
//       this.route.navigateByUrl('/home');
//       return false;
//     }
//   }
//
//   loginExiste(): boolean {
//     return this.exist;
// }
// }
