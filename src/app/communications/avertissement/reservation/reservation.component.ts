import {Component, Inject, OnInit} from '@angular/core';
import {Bien, Reservation} from '../../../objet';
import {Router} from '@angular/router';
import {BienService} from '../../../service/bien.service';
import {LoginService} from '../../../service/login.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {PersonneService} from '../../../service/personne.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ReservationService} from '../../../service/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  codeFaut: string;

  constructor(private route: Router,
              private bienService: BienService,
              private reservationService: ReservationService,
              private serv: LoginService,
              public dialogRef: MatDialogRef<ReservationComponent>,
              private personneService: PersonneService,
              @Inject(MAT_DIALOG_DATA) data
  ) {
    this.bien = data.bien;
  }

  bien: Bien;
  reservation: Reservation;
  acceptForm = new FormGroup({
    check: new FormControl(false, [Validators.required])
  });

  choixJourForm: FormGroup;
  veifCodeForm = new FormGroup({
    codeActivation: new FormControl('', [Validators.required])
  });

  service = this.serv;
  verifCode = false;
  verifCode2 = false;
  cachedemandeJour = true;
  codeAcceptee = false;
  nJour: number;
  reservationError: string;

  ngOnInit(): void {
    this.choixJourForm = new FormGroup({
      jourA: new FormControl(Date, [Validators.required]),
      jourD: new FormControl(Date, [Validators.required]),
      nPersonne: new FormControl(0, [Validators.required, Validators.min(1), Validators.max(this.bien.npmax)])
    });
  }

  onClose(): void{
    this.dialogRef.close();
  }

  // tslint:disable-next-line:typedef
  activation(): void{
    if (this.service.repIBAU() && this.acceptForm.valid){
      this.cachedemandeJour = false;
      this.verifCode = true;
      const reservation = new Reservation();
      reservation.bienConserne = this.bien;
      reservation.faitPar = this.serv.client();
      reservation.ddArrivee = this.choixJourForm.value.jourA;
      reservation.ddDepart = this.choixJourForm.value.jourD;
      reservation.nPersonneSurLieu = this.choixJourForm.value.nPersonne;
      this.reservationService.dispo(reservation).subscribe((reponse: boolean) => {
        if (reponse){
          this.bienService.envoiMailReservation(reservation).subscribe((result: number) => {
            if (result <= 0){
              this.codeAcceptee = true;
              this.nJour = 1;
            }else {
              this.codeAcceptee = true;
              this.nJour = result;
            }
            this.reservation = reservation;
          }, () => alert('problemme de connection server'));
        } else {
          this.verifCode = false;
          this.cachedemandeJour = true;
          this.reservationError = 'Le bien choisi n\'est pas disponible à cette date';
        }
      }, () => alert('probleme avec la vérification de réservation'));
    }
    else{
      this.route.navigateByUrl('/profil');
    }
  }

  envoiCode(): void{
    if (this.veifCodeForm.valid){
      this.personneService.verifCompte(this.veifCodeForm.value.codeActivation).subscribe((reponse: boolean) => {
          this.verifCode2 = reponse;
          this.verifCode = !reponse;
      }, () => alert('problemme de connection server'));
    }
  }

  voirProfil(): void{
    this.route.navigateByUrl('/profil');
    this.onClose();
  }

}
