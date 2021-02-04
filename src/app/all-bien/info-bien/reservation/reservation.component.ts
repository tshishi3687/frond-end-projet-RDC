import {Component, Input, OnInit, Output} from '@angular/core';
import {ReservationService} from '../../../service/reservation.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../../service/login.service';
import {Bien, Personne, Reservation} from '../../../objet';
import {DatePipe, formatDate} from '@angular/common';
import {EventEmitter} from 'events';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  @Input() b: Bien;

  reservationFrom = new FormGroup({
    dda: new FormControl(null, [Validators.required]),
    ddd: new FormControl(null, [Validators.required]),
    npersonne: new FormControl(null, [Validators.required])
  });

  @Input() br: Bien;
  private ok = 'Votre reservation à bien été pris en compte';
  private error = 'il y a eu une erro :\'( !';
  cadreReservation = false;
  btnReservation = true;
  formValide: boolean;

  constructor(
    private service: ReservationService,
    private personne: LoginService) {
  }

  ngOnInit(): void {
  }

  creerReservation(): void{
    if (this.reservationFrom.valid){
      this.formValide = false;
      const dateJ = formatDate(new Date(), 'yyyy-MM-dd', 'en');
      const reservation = new Reservation();
      reservation.id = 0;
      reservation.ddj = dateJ;
      reservation.dda = this.reservationFrom.value.dda;
      reservation.ddd = this.reservationFrom.value.ddd;
      reservation.npersonne = this.reservationFrom.value.npersonne;
      reservation.bien_reserve = this.br;
      reservation.reserverPar = this.personne.client();
      this.service.ajouterReservation(reservation).subscribe(reponse => alert(this.ok), reponse => alert(this.error));
    }else{
      this.formValide = true;
    }
  }

  mesReservation(): void{

  }

  changement(): void{
    if (this.btnReservation === false){
      this.btnReservation = true;
      this.cadreReservation = false;
    }else{
      this.btnReservation = false;
      this.cadreReservation = true;
    }
  }

}
