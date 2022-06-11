import { Component, OnInit } from '@angular/core';
import {AdressUserServiceService} from '../../../service/adress-user-service.service';
import {PaysServiceService} from '../../../service/pays-service.service';
import {AdressUser, Pays} from '../../../objet';
import {LoginService} from '../../../service/login.service';
import {FormControl, FormGroup} from '@angular/forms';
import {PersonneService} from '../../../service/personne.service';

@Component({
  selector: 'app-ajouter-adresse',
  templateUrl: './ajouter-adresse.component.html',
  styleUrls: ['./ajouter-adresse.component.css']
})
export class AjouterAdresseComponent implements OnInit {

  constructor(private adressServ: AdressUserServiceService,
              private paysServ: PaysServiceService,
              private service: LoginService,
              private persService: PersonneService) { }

  adressText: string;
  listPays: Array<Pays> ;
  adressUser: AdressUser;
  adressUserForm = new FormGroup({
    numBien: new FormControl(),
    nomRue: new FormControl(),
    codePostal: new FormControl(),
    pays: new FormControl('defaults'),
  });

  ngOnInit(): void {
    this.voirAdressUser();
    this.voirPays();
  }

  voirPays(): void {
    this.paysServ.voirPays().subscribe(reponse => this.listPays = reponse, () => alert('un proble avec la liste des pays'));
  }

  voirAdressUser(): void{
    this.adressServ.voirAdressUSer(this.service.client()).subscribe(reponse => this.adressUser = reponse , () => alert('un probleme avec la reception d\'adress'));
  }

  ajourterAdressUser(): void{
    const adressUser = new AdressUser();
    adressUser.id = 0;
    adressUser.numHabitation = this.adressUserForm.value.numBien;
    adressUser.nomRue = this.adressUserForm.value.nomRue;
    adressUser.codePostal = this.adressUserForm.value.codePostal;
    adressUser.pays = this.listPays[this.adressUserForm.value.pays];
    adressUser.appartienA = this.service.client();
    this.adressServ.ajouterAdressUser(adressUser).subscribe(() => {
      this.adressText = 'Votre nouvelle adresse a bien été enregistrée';
      this.adressUserForm.reset();
      this.voirAdressUser();
      this.persService.verifIBAU(this.service.client()).subscribe((reponses: boolean) => {
        sessionStorage.setItem(this.service.SessionVerifIBAU, JSON.stringify(reponses));
      }, () => alert('Impossible de verifier l\'IBAU'));
    }, () => alert('il ya eu un probleme lors de l\'enregistrement d\'adresse'));
  }

  changerAdress(): void{

  }
}
