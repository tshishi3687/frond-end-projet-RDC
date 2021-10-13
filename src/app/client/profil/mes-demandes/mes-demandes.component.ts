import { Component, OnInit } from '@angular/core';
import {Demande, Personne, Reservation} from '../../../objet';
import {ReservationService} from '../../../service/reservation.service';
import {LoginService} from '../../../service/login.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {InfoMesReservationComponent} from '../mes-resercation/info-mes-reservation/info-mes-reservation.component';
import {DemandeService} from '../../../service/demande.service';
import {InfoMesDemandesComponent} from '../demande-recu/info-mes-demandes/info-mes-demandes.component';

@Component({
  selector: 'app-mes-demandes',
  templateUrl: './mes-demandes.component.html',
  styleUrls: ['./mes-demandes.component.css']
})
export class MesDemandesComponent implements OnInit {

  listDemande: Array<Demande> = [];
  private error = 'Il y a eu un probleme :\'( ';
  constructor(
    private service: DemandeService,
    private personne: LoginService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.mesDemande();
  }

  mesDemande(): void{
    // @ts-ignore
    // tslint:disable-next-line:max-line-length
    this.service.voirDemandePersonne(this.personne.client()).subscribe(reponse => this.listDemande = reponse, reponse => alert(this.error));
  }

  // tslint:disable-next-line:typedef
  informationbient(demande: Demande) {
    this.personne.demandeDB(demande);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '100%';
    dialogConfig.height = '100%';
    this.dialog.open(InfoMesDemandesComponent, dialogConfig);
  }

}
