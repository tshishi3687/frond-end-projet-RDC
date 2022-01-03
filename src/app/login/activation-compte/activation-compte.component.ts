import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../service/login.service';
import {PersonneService} from '../../service/personne.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Personne} from '../../objet';

@Component({
  selector: 'app-activation-compte',
  templateUrl: './activation-compte.component.html',
  styleUrls: ['./activation-compte.component.css']
})
export class ActivationCompteComponent implements OnInit {

  constructor(private ser: LoginService,
              private personneService: PersonneService,
              private route: Router) { }

  activationCompteOK: false;
  textErro: string;
  maPersonne: Personne;
  verifForm = new FormGroup({
    codeActivation: new FormControl(null, [Validators.required])
  });

  ngOnInit(): void {
  }

  validationCompte(): void{
    if (this.verifForm.valid){
      this.personneService.verifCompte(this.verifForm.value.codeActivation).subscribe((reponse: boolean) => {
        if (reponse){
          // @ts-ignore
          this.activationCompteOK = true;
        }else {
          this.textErro = '*** CODE INCORECTE ***';
        }
      });
    }
  }

}
