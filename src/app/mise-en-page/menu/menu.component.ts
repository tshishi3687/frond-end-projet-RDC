import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../service/login.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {BoutonMesBiensComponent} from '../../communications/avertissement/bouton-mes-biens/bouton-mes-biens.component';
import {
  BoutonContratReservationComponent
} from '../../communications/avertissement/bouton-contrat-reservation/bouton-contrat-reservation.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  text = 'Bonjour Bienvenue dans Angular';
  input: string;

  constructor(private service: LoginService, private dialog: MatDialog, private route: Router) { }
  ser = this.service;

  ngOnInit(): void {
  }

  btnMesBiens(): void{
    if (!this.ser.repMyBien()){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = 'auto';
      dialogConfig.height = 'auto';
      this.dialog.open(BoutonMesBiensComponent, dialogConfig);
    }else {
      this.route.navigateByUrl('/Client/voirBienPersonne');
    }
  }

  bntContratReservation(): void{
    if (this.ser.repReservation()){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = 'auto';
      dialogConfig.height = 'auto';
      this.dialog.open(BoutonContratReservationComponent, dialogConfig);
    }else {
      this.route.navigateByUrl('/Client/contrat_rese');
    }
  }
}
