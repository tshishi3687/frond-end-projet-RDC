import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PersonneService} from '../../service/personne.service';

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

  PersonneForm = new FormGroup({
    Nom: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(30)]),
    Prenom: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(30)]),
    Ddn: new FormControl(null, [Validators.required, ]),
    Email: new FormControl(null, [Validators.required, Validators.maxLength(50), Validators.email])
  });

  verifForm = new FormGroup({
    codeActivation: new FormControl(null, [Validators.required])
  });

  ngOnInit(): void {
  }

  envoiDemande(): void {

  }

  validationCode(): void {
    if (this.verifForm.valid){
      this.personneService.verifCompte(this.verifForm.value.codeActivation).subscribe((reponse: boolean) => {
        if (reponse){
          // @ts-ignore
          this.activationCompteOK = true;
        }
      });
    }
  }
}
