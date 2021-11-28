import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../service/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  text = 'Bonjour Bienvenue dans Angular';
  input: string;

  constructor(private ser: LoginService) { }
  service = this.ser;

  ngOnInit(): void {
  }

  verifSiAdmin(): boolean{
   return this.service.AdminRolle();
  }

  deconnexion(): void{
    this.service.logout();
  }

  verifSiCo(): boolean{
    return this.service.isAuthenticated();
  }

  verifSiPropietere(): boolean{
    return this.service.isProprietaireRoll();
  }
}
