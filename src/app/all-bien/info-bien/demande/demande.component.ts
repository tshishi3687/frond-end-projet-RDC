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
  messageAttenteBool = false;
  fomDemande = true;
  textDemandeEnvoyer: string;
  textError: string;
  npersonne: number;
  dateJ = new Date();

  ngOnInit(): void {
  }

  creeDemande(): void{
    const dateA = new Date(this.reservationFrom.value.dda);
    const dateD = new Date(this.reservationFrom.value.ddd);
    this.npersonne = this.reservationFrom.value.npersonne;
    const demande = new Demande();
    const etatDEmande = new EtatDemande();
    etatDEmande.id = 1;

    if ((this.reservationFrom.valid) && (dateA <= this.dateJ) && (dateD <= dateA) && (this.npersonne <= this.personne.repBiendb().npmax)){

      this.messageAttenteBool = true;
      this.fomDemande = false;
      this.formValide = false;
      demande.id = 0;
      demande.dda = this.reservationFrom.value.dda;
      demande.ddd = this.reservationFrom.value.ddd;
      demande.npersonne = this.reservationFrom.value.npersonne;
      demande.bienDemandee = this.personne.repBiendb();
      demande.faitPar = this.personne.client();
      demande.etat = etatDEmande;
      this.service.ajouterReservation(demande).subscribe(reponse => {
        this.messageAttenteBool = false;
        this.fomDemande = false;
        this.textDemandeEnvoyer = 'Votre demande a bien été envoyé ;)';
      }, reponse => alert(this.error));
    }
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
