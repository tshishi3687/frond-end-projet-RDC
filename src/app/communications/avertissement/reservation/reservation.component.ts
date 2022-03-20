import {Component, OnInit} from '@angular/core';
import {Bien, NombreNuitVoulu, Reservation} from '../../../objet';
import {Router} from '@angular/router';
import {BienService} from '../../../service/bien.service';
import {LoginService} from '../../../service/login.service';
import {MatDialogRef} from '@angular/material/dialog';
import {PersonneService} from '../../../service/personne.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  codeFaut: string;

  constructor(private route: Router,
              private bienService: BienService,
              private serv: LoginService,
              public dialogRef: MatDialogRef<ReservationComponent>,
              private personneService: PersonneService
  ) { }

  acceptForm = new FormGroup({
    check: new FormControl(false, [Validators.required])
  });

  nPMax = this.serv.repBiendb().npmax;

  // @ts-ignore
  choixJourForm = new FormGroup({
    jourA: new FormControl(Date, [Validators.required]),
    jourD: new FormControl(Date, [Validators.required]),
    nPersonne: new FormControl(0, [Validators.required, Validators.min(1), Validators.max(this.nPMax)])
  });

  veifCodeForm = new FormGroup({
    codeActivation: new FormControl('', [Validators.required])
  });

  listNuit: Array<NombreNuitVoulu> = [];
  service = this.serv;
  verifCode = false;
  verifCode2 = false;
  cachedemandeJour = true;
  codeAcceptee = false;
  nJour: number;

  ngOnInit(): void {
  }

  addListNuit(): void{
    const nNuit1 = new NombreNuitVoulu();
    nNuit1.id = 1;
    nNuit1.nNuit = 15;
    this.listNuit.push(nNuit1);

    const nNuit2 = new NombreNuitVoulu();
    nNuit2.id = 2;
    nNuit2.nNuit = 30;
    this.listNuit.push(nNuit2);


    const nNuit3 = new NombreNuitVoulu();
    nNuit3.id = 3;
    nNuit3.nNuit = 90;
    this.listNuit.push(nNuit3);


    const nNuit4 = new NombreNuitVoulu();
    nNuit4.id = 4;
    nNuit4.nNuit = 180;
    this.listNuit.push(nNuit4);
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
      reservation.bienConserne = this.serv.repBiendb();
      reservation.faitPar = this.serv.client();
      reservation.ddArrivee = this.choixJourForm.value.jourA;
      reservation.ddDepart = this.choixJourForm.value.jourD;
      this.bienService.envoiMailReservation(reservation).subscribe((result: number) => {
        if (result <= 0){
          this.codeAcceptee = true;
          this.nJour = 1;
        }else {
          this.codeAcceptee = true;
          this.nJour = result;
          console.log(result);
        }
      }, result => alert('problemme de connection server'));
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
      }, reponse => alert('problemme de connection server'));
    }
  }

  voirProfil(): void{
    this.route.navigateByUrl('/profil');
    this.onClose();
  }

  veriDate(): boolean{
    // tslint:disable-next-line:max-line-length
    return !(this.choixJourForm.value.jourA > Date.now() || this.choixJourForm.value.jourA > this.choixJourForm.value.jourD);
  }
}
