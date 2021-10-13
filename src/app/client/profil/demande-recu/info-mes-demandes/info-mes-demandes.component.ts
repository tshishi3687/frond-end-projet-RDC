import {Component, Input, OnInit} from '@angular/core';
import {Demande} from '../../../../objet';
import {LoginService} from '../../../../service/login.service';
import {MatDialogRef} from '@angular/material/dialog';
import {InfoMesReservationComponent} from '../../mes-resercation/info-mes-reservation/info-mes-reservation.component';

@Component({
  selector: 'app-info-mes-demandes',
  templateUrl: './info-mes-demandes.component.html',
  styleUrls: ['./info-mes-demandes.component.css']
})
export class InfoMesDemandesComponent implements OnInit {

  echange = false;
  @Input() r: Demande;

  constructor(private service: LoginService,
              public dialogRef: MatDialogRef<InfoMesReservationComponent>) { }
  ser = this.service;

  ngOnInit(): void {
  }

  siConnecte(): boolean{
    return this.service.isAuthenticated();
  }

  changement(): boolean{

    if (this.echange === false) {
      this.echange = true;
      return this.echange;
    }else{
      this.echange = false;
      return this.echange;
    }
  }
  onClose(): void{
    this.dialogRef.close();
  }

}
