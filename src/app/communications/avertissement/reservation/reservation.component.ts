import {Component, Inject, OnInit} from '@angular/core';
import {Bien, Reservation} from '../../../objet';
import {Router} from '@angular/router';
import {BienService} from '../../../service/bien.service';
import {LoginService} from '../../../service/login.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {PersonneService} from '../../../service/personne.service';
import {UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {ReservationService} from '../../../service/reservation.service';
import {RGPDComponent} from '../../donneeLegaux/rgpd/rgpd.component';
import {CGUComponent} from '../../donneeLegaux/cgu/cgu.component';
import {CRComponent} from '../../donneeLegaux/cr/cr.component';

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
              private dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) data
  ) {
    this.bien = data.bien;
    this.choixJourForm = new UntypedFormGroup({
      jourA: new UntypedFormControl(Date, [Validators.required]),
      jourD: new UntypedFormControl(Date, [Validators.required]),
      nPersonne: new UntypedFormControl(0, [Validators.required, Validators.min(1), Validators.max(this.bien.npmax)])
    });
  }

  bien: Bien;
  reservation: Reservation;
  acceptForm = new UntypedFormGroup({
    check: new UntypedFormControl(false, [Validators.required])
  });

  veifCodeForm = new UntypedFormGroup({
    codeActivation: new UntypedFormControl('', [Validators.required])
  });

  choixJourForm: UntypedFormGroup;
  service = this.serv;
  verifCode = false;
  verifCode2 = false;
  cachedemandeJour = true;
  codeAcceptee = false;
  nJour: number;
  reservationError: string;
  date: Date;
  listR: Array<Date> = [];
  event: any;
  reservationOk = false;

  ngOnInit(): void {

    // @ts-ignore
    this.choixJourForm.get('jourA').valueChanges.subscribe((v) => {
      if (!v) {
        return;
      }
      this.date = new Date(v);
    });
  }

  reservationReussit(): void{
    this.reservationOk = true;
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
      this.route.navigateByUrl('/Client/profil');
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
    this.route.navigateByUrl('/Client/profil');
    this.onClose();
  }

  isSelected = (event: Date): boolean => {
    if (!event) {
      return true;
    }
    const date =
      event.getFullYear() +
      '-' +
      ('00' + (event.getMonth() + 1)).slice(-2) +
      '-' +
      ('00' + event.getDate()).slice(-2);
    this.bien.reservers.find(r => this.listR.push(r));
    // @ts-ignore
    return this.bien.reservers.find(r => r === date) ? false : (this.bien.disponibles.find(d => d === date)) ? true : null;
  }

  lookRGPD(): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '100%';
    dialogConfig.height = '100%';
    this.dialog.open(RGPDComponent, dialogConfig);
  }

  lookCGU(): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '100%';
    dialogConfig.height = '100%';
    this.dialog.open(CGUComponent, dialogConfig);
  }

  lookCR(): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '100%';
    dialogConfig.height = '100%';
    this.dialog.open(CRComponent, dialogConfig);
  }
}
