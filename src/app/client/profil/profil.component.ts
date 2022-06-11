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

  deconnexion(): void{
    this.donneeClient.logout();
  }
}
