import { Component, OnInit } from '@angular/core';
import {InfoBancaireService} from '../../../service/info-bancaire.service';
import {LoginService} from '../../../service/login.service';
import {InfoBancaire} from '../../../objet';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PersonneService} from '../../../service/personne.service';

@Component({
  selector: 'app-ajouter-info-bancaire',
  templateUrl: './ajouter-info-bancaire.component.html',
  styleUrls: ['./ajouter-info-bancaire.component.css']
})
export class AjouterInfoBancaireComponent implements OnInit {

  constructor(private infoBancService: InfoBancaireService,
              private service: LoginService,
              private persService: PersonneService) { }

  infoBancaire: InfoBancaire;
  infoBancaireText: string;
  infoBancaireForm = new FormGroup({
    nomBanque: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(60)]),
    // tslint:disable-next-line:max-line-length
    numCarte: new FormControl('ex : 0234-1234-1234-01234', [Validators.required , Validators.pattern('[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}')]),
    numCompte: new FormControl('ex : be09-0234-1234-1234', [Validators.required , Validators.pattern('[aA-zZ]{2}[0-9]{2}-[0-9]{4}-[0-9]{4}-[0-9]{4}')]),
    dateExpiration: new FormControl()
  });

  ngOnInit(): void {
    this.voirInfobancaireUser();
  }

  ajouterInfoBancaire(): void{
    const infoBancaire = new InfoBancaire();
    infoBancaire.id = 0;
    infoBancaire.nomBanque = this.infoBancaireForm.value.nomBanque;
    infoBancaire.numCarte = this.infoBancaireForm.value.numCarte;
    infoBancaire.numCompte = this.infoBancaireForm.value.numCompte;
    infoBancaire.dateExpiration = this.infoBancaireForm.value.dateExpiration;
    infoBancaire.appartienA = this.service.client();
    this.infoBancService.ajouterInfoBancaire(infoBancaire).subscribe(() => {
      this.infoBancaireText = 'Votre nouvelle information bancaire a bien été enregistrée';
      this.infoBancaireForm.reset();
      this.voirInfobancaireUser();
      this.persService.verifIBAU(this.service.client()).subscribe((reponses: boolean) => {
        sessionStorage.setItem(this.service.SessionVerifIBAU, JSON.stringify(reponses));
      }, () => alert('Impossible de verifier l\'IBAU'));
    }, () => alert('il ya eu un probleme lors de l\'enregistrement d\'information bancaire'));
  }

  private voirInfobancaireUser(): void{
    this.infoBancService.voirInfoBancairePersonne(this.service.client()).subscribe(reponse => this.infoBancaire = reponse, () => alert('un probleme avec la reception d\'information bancaire'));
  }

  changerInfoBancaire(): void{

  }
}
