import {Component, Input, OnInit} from '@angular/core';
import {LoginService} from '../../service/login.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {MiseEngardeStartAppsComponent} from '../../communications/avertissement/mise-engarde-start-apps/mise-engarde-start-apps.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private ser: LoginService,
              private dialog: MatDialog) { }
  imgBoo = true;
  connexion: boolean;
  mdpBoll: boolean;
  inscription: boolean;
  service = this.ser;
  logo = 'assets/img/rdc-map-flag.png';
  boolLogo = true;

  ngOnInit(): void {
    this.avertissement();
  }

  bntConnection(): void{
    this.boolLogo = false;
    this.inscription = false;
    this.connexion = true;
    this.imgBoo = false;
    this.mdpBoll = false;
  }

  bntInscription(): void{
    this.imgBoo = false;
    this.boolLogo = false;
    this.inscription = true;
    this.connexion = false;
    this.mdpBoll = false;
  }

  mdpModif(): void{
    this.mdpBoll = true;
    this.imgBoo = false;
    this.boolLogo = false;
    this.inscription = false;
    this.connexion = false;
  }



  avertissement(): void{
    if (!this.service.isAuthenticated()){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = 'auto';
      dialogConfig.height = 'auto';
      this.dialog.open(MiseEngardeStartAppsComponent, dialogConfig);
    }
  }
}
