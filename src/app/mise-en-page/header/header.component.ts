import {Component, Input, OnInit} from '@angular/core';
import {LoginService} from '../../service/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private ser: LoginService) { }
  connexion: boolean;
  inscription: boolean;
  service = this.ser;
  logo = 'assets/img/rdc-map-flag.png';

  ngOnInit(): void {
  }

  siconnecte(): boolean{
    return !this.service.isAuthenticated();
  }

  bntConnection(): void{
      this.inscription = false;
      this.connexion = true;
  }

  bntInscription(): void{
      this.inscription = true;
      this.connexion = false;
  }
}
