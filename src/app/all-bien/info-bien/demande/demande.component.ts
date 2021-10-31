import {Component, Input, OnInit} from '@angular/core';
import {Bien, Demande, EtatDemande} from '../../../objet';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../../service/login.service';
import {formatDate} from '@angular/common';
import {DemandeService} from '../../../service/demande.service';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent implements OnInit {

  constructor(
    private service: DemandeService,
    private personne: LoginService)  { }

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

  ngOnInit(): void {
  }

  creeDemande(): void{

    // @ts-ignore
    const dateJ = new Date(this.reservationFrom.value.ddd);
    console.log(dateJ);
    const demande = new Demande();
    const etatDEmande = new EtatDemande();
    etatDEmande.id = 1;

    if (this.reservationFrom.valid){
      this.formValide = false;
      demande.id = 0;
      demande.dda = this.reservationFrom.value.dda;
      demande.ddd = this.reservationFrom.value.ddd;
      demande.npersonne = this.reservationFrom.value.npersonne;
      demande.bienDemandee = this.personne.repBiendb();
      demande.faitPar = this.personne.client();
      demande.etat = etatDEmande;
      this.service.ajouterReservation(demande).subscribe(reponse => alert(this.ok), reponse => alert(this.error));
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

  reservationBoutton(): boolean{
    if (this.personne.client().id === this.personne.repBiendb().appartient.id) {
      return false;
    }else{
      return true;
    }
  }
}
