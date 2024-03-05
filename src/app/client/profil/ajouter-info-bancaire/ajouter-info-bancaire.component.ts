import { Component, OnInit } from '@angular/core';
import {InfoBancaireService} from '../../../service/info-bancaire.service';
import {LoginService} from '../../../service/login.service';
import {InfoBancaire, Validator} from '../../../objet';
import {UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
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
  infoBancaireForm = new UntypedFormGroup({
    nomBanque: new UntypedFormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]),
    // tslint:disable-next-line:max-line-length
    numCarte: new UntypedFormControl('', [Validators.required , Validators.pattern('[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}')]),
    numCompte: new UntypedFormControl('', [Validators.required , Validators.pattern('[aA-zZ]{2}[0-9]{2}-[0-9]{4}-[0-9]{4}-[0-9]{4}')]),
    expirM: new UntypedFormControl('defaults', [Validators.required, Validators.min(1), Validators.max(12)]),
    expirA: new UntypedFormControl('defaults', [Validators.required])
  });

  listAnnee: number [] = [];
  listMois: number [] = [];

  ngOnInit(): void {
    this.voirInfobancaireUser();
    this.tabAnnee();
    this.tabMois();
  }

  ajouterInfoBancaire(): void{
    const date = new Date(this.infoBancaireForm.value.expirA, this.infoBancaireForm.value.expirM, 1);
    const infoBancaire = new InfoBancaire();
    infoBancaire.id = 0;
    infoBancaire.nomBanque = this.infoBancaireForm.value.nomBanque;
    infoBancaire.numCarte = this.infoBancaireForm.value.numCarte;
    infoBancaire.numCompte = this.infoBancaireForm.value.numCompte;
    infoBancaire.dateExpiration = date;
    infoBancaire.appartienA = this.service.client();
    this.infoBancService.ajouterInfoBancaire(infoBancaire).subscribe(() => {
      this.infoBancaireText = 'Votre nouvelle information bancaire a bien été enregistrée';
      this.infoBancaireForm.reset();
      this.voirInfobancaireUser();
      this.persService.verifIBAU(this.service.client()).subscribe((reponses: Validator) => {
        sessionStorage.setItem(this.service.SessionVerifValidator, JSON.stringify(reponses));
      }, () => alert('Impossible de verifier les validators'));
    }, () => alert('il ya eu un probleme lors de l\'enregistrement d\'information bancaire'));
  }

  private voirInfobancaireUser(): void{
    this.infoBancService.voirInfoBancairePersonne(this.service.client()).subscribe(reponse => this.infoBancaire = reponse, () => alert('un probleme avec la reception d\'information bancaire'));
  }

  tabAnnee(): void{
    const date = new Date();
    for (let i = 0; i < 11; i++){
      this.listAnnee.push(date.getFullYear() + i);
    }
  }

  tabMois(): void{
    for (let i = 0; i < 12; i++){
      this.listMois.push(i + 1);
    }
  }

  verifMois(): boolean {
    return this.infoBancaireForm.value.expirM !== 'defaults';
  }

  verifAnnee(): boolean {
    return this.infoBancaireForm.value.expirA !== 'defaults';
  }
}
