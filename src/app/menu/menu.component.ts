import { Component, OnInit } from '@angular/core';
import {LoginService} from '../service/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  text = 'Bonjour Bienvenue dans Angular';
  input: string;

  constructor(private service: LoginService) { }

  ngOnInit(): void {
  }

  verifCoo(): boolean{
   return this.service.AdminRolle();
  }

  deconnexion(): void{
    this.service.logout();
  }

  verifSiCo(): boolean{
    return this.service.isAuthenticated();
  }

  verifsiloca(): boolean{
    return !this.service.isLocataireRoll();
  }
}
