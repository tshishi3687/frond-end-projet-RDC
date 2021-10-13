import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../service/login.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor(private profil: LoginService) { }
  donneeClient = this.profil;
  creation: boolean;
  bien: boolean;
  reservation: boolean;
  logo = 'assets/img/rdc-map-flag.png';

  ngOnInit(): void {
  }

  creationBien(): void {
      this.creation = true;
      this.bien = false;
      this.reservation = false;
  }

  mesBiens(): void {
      this.creation = false;
      this.bien = true;
      this.reservation = false;
  }

  mesReservation(): void {
      this.creation = false;
      this.bien = false;
      this.reservation = true;
  }

  deconnexion(): void{
    this.donneeClient.logout();
  }

  verifSiCo(): boolean{
    return this.donneeClient.isAuthenticated();
  }

  verifsiloca(): boolean{
    return !this.donneeClient.isLocataireRoll();
  }
}
