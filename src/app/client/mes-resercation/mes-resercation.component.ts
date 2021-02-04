import { Component, OnInit } from '@angular/core';
import {Personne, Reservation} from '../../objet';
import {ReservationService} from '../../service/reservation.service';
import {LoginService} from '../../service/login.service';

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
    private personne: LoginService
  ) { }

  ngOnInit(): void {
  }

  mesReservation(): void{
    const personne = new Personne();
    // @ts-ignore
    // tslint:disable-next-line:max-line-length
    this.service.voirReservationPersonne(this.personne.client()).subscribe(reponse => this.listreservation = reponse.list, reponse => alert(this.error));
  }
}
