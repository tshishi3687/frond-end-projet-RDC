import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PersonneService} from '../../service/personne.service';
import {ContactUser, Mdp, ModifPass, Personne} from '../../objet';

@Component({
  selector: 'app-modif-mot-de-passe',
  templateUrl: './modif-mot-de-passe.component.html',
  styleUrls: ['./modif-mot-de-passe.component.css']
})
export class ModifMotDePasseComponent implements OnInit {

  constructor(private personneService: PersonneService) { }

  connexionOK = false;
  inscriptionBool = true;
  attenteBool = false;
  textError = '';
  textBool = false;
  activationCompte = false;

  PersonneForm = new FormGroup({
    Nom: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(30)]),
    Prenom: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(30)]),
    Ddn: new FormControl(null, [Validators.required, ]),
    Email: new FormControl(null, [Validators.required, Validators.maxLength(50), Validators.email])
  });

  verifForm = new FormGroup({
    codeActivation: new FormControl(null, [Validators.required]),
    nPass: new FormControl(null, [Validators.required]),
    vPass: new FormControl(null, [Validators.required]),
  });

  ngOnInit(): void {
  }

  envoiDemande(): void {
    this.attenteBool = true;
    this.inscriptionBool = false;

    const contactUser = new ContactUser();
    contactUser.email = this.PersonneForm.value.Email;

    const mdp = new Mdp();
    mdp.mdp = this.PersonneForm.value.Password;
    mdp.mail = this.PersonneForm.value.Email;

    const personne = new Personne();
    personne.id = 0;
    personne.nom = this.PersonneForm.value.Nom;
    personne.prenom = this.PersonneForm.value.Prenom;
    personne.ddn = this.PersonneForm.value.Ddn;
    personne.contactUser = contactUser;
    personne.password = mdp;

    // tslint:disable-next-line:max-line-length
    this.personneService.changeMDP(personne).subscribe((reponse: boolean) => {
      console.log(reponse);
      if (!reponse){
        this.inscriptionBool = true;
        this.attenteBool = false;
      }else {
        this.attenteBool = false;
        this.connexionOK = reponse;
      }
    }, () => alert('il y a problème avec le serveur. Veuillez réessayer plus tard.'));
  }

  validationCode(): void {
    if (this.verifForm.valid){
      const mdp = new ModifPass();
      mdp.codeActive = this.verifForm.value.codeActivation;
      mdp.newPass = this.verifForm.value.nPass;
      mdp.verifPass = this.verifForm.value.vPass;
      console.log(mdp);
      this.personneService.mdpModif(mdp).subscribe((reponse: boolean) => {
        console.log(reponse);
        if (reponse){
          // @ts-ignore
          this.activationCompte = true;
        }
      });
    }
  }
}
