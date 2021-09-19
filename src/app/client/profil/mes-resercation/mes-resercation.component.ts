import { Component, OnInit } from '@angular/core';
import {Bien, Personne, Reservation} from '../../../objet';
import {ReservationService} from '../../../service/reservation.service';
import {LoginService} from '../../../service/login.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {InfoBienComponent} from '../../../all-bien/info-bien/info-bien.component';
import {InfoMesReservationComponent} from './info-mes-reservation/info-mes-reservation.component';

@Component({
  selector: 'app-mes-resercation',
  templateUrl: './mes-resercation.component.html',
  styleUrls: ['./mes-resercation.component.css']
})
export class MesResercationComponent implements OnInit {

  listreservation: Array<Reservation> = [];
  private error = 'Il y a eu un probleme :\'( ';
  constructor(
    private service: ReservationService,
    private personne: LoginService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.mesReservation();
  }

  mesReservation(): void{
    const personne = new Personne();
    // @ts-ignore
    // tslint:disable-next-line:max-line-length
    this.service.voirReservationPersonne(this.personne.client()).subscribe(reponse => this.listreservation = reponse, reponse => alert(this.error));
    console.log(this.listreservation);
  }

  // tslint:disable-next-line:typedef
  informationbient(r: Reservation){
    this.personne.reservationDB(r);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '100%';
    dialogConfig.height = '100%';
    this.dialog.open(InfoMesReservationComponent, dialogConfig);
  }
}
