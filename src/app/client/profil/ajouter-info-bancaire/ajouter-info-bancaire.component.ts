import { Component, OnInit } from '@angular/core';
import {InfoBancaireService} from '../../../service/info-bancaire.service';
import {LoginService} from '../../../service/login.service';
import {InfoBancaire} from '../../../objet';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-ajouter-info-bancaire',
  templateUrl: './ajouter-info-bancaire.component.html',
  styleUrls: ['./ajouter-info-bancaire.component.css']
})
export class AjouterInfoBancaireComponent implements OnInit {

  constructor(private infoBancService: InfoBancaireService,
              private service: LoginService) { }

  infoBancaire: InfoBancaire;
  infoBancaireText: string;
  infoBancaireForm = new FormGroup({
    nomBanque: new FormControl(),
    numCarte: new FormControl(),
    numCompte: new FormControl(),
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
    this.infoBancService.ajouterInfoBancaire(infoBancaire).subscribe(reponse => {
      this.infoBancaireText = 'Votre nouvelle information bancaire a bien été enregistrée';
      this.infoBancaireForm.reset();
      this.voirInfobancaireUser();
      this.service.verifIBAU();
    }, reponse => alert('il ya eu un probleme lors de l\'enregistrement d\'information bancaire'));
  }

  private voirInfobancaireUser(): void{
    // @ts-ignore
    this.infoBancService.voirInfoBancairePersonne(this.service.client()).subscribe(reponse => this.infoBancaire = reponse, reponse => alert('un probleme avec la reception d\'information bancaire'));
  }

  changerInfoBancaire(): void{

  }
}
