import {Component, Input, OnInit, Output} from '@angular/core';
import {DatePipe, formatDate} from '@angular/common';
import {Bien} from '../../../objet';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ReservationService} from '../../../service/reservation.service';
import {LoginService} from '../../../service/login.service';

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

    // const dateJ = formatDate(new Date(), 'yyyy-MM-dd', 'en');
    // const reservation = new Demande();
    //
    // if (this.reservationFrom.valid){
    //   this.formValide = false;
    //   reservation.id = 0;
    //   reservation.dda = this.reservationFrom.value.dda;
    //   reservation.ddd = this.reservationFrom.value.ddd;
    //   reservation.npersonne = this.reservationFrom.value.npersonne;
    //   reservation.bienDemandee = this.personne.repBiendb();
    //   reservation.faitPar = this.personne.client();
    //   this.service.ajouterReservation(reservation).subscribe(reponse => alert(this.ok), reponse => alert(this.error));
    // }else{
    //   this.formValide = true;
    // }
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

  reservationBoutton(): boolean{
    if (this.personne.client().id === this.personne.repBiendb().appartient.id) {
      return false;
    }else{
      return true;
    }
  }
}
