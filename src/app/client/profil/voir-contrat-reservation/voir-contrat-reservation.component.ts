import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../service/login.service';
import {Contrat} from '../../../objet';
import {ReservationService} from '../../../service/reservation.service';

@Component({
  selector: 'app-voir-contrat-reservation',
  templateUrl: './voir-contrat-reservation.component.html',
  styleUrls: ['./voir-contrat-reservation.component.css']
})
export class VoirContratReservationComponent implements OnInit {

  constructor(
    private contratService: ReservationService,
    private service: LoginService) { }

  listContrat: Array<Contrat> = [];
  logo = this.service.logo;
  printSelected = null;
  signature: boolean;

  ngOnInit(): void {
    this.voirContrat();
  }

  voirContrat(): void{
    this.contratService.voirReservation().subscribe(reponse => {
      this.listContrat = reponse;
    }, () => alert('impossible de recupérer la liste des réservation'));
  }

  print(c): void {
    this.signature = true;
    this.printSelected = c;
    setTimeout(() => {
      window.print();
      this.signature = false;
    }, 1);
  }
}
