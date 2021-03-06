import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PersonneService} from '../../service/personne.service';
import {FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {validate, ValidateFn} from 'codelyzer/walkerFactory/walkerFn';
import {Personne} from '../../objet';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  constructor(
    private router: Router,
    private personneService: PersonneService
  ) { }

  PersonneForm = new FormGroup({
    Nom: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(30)]),
    Prenom: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(30)]),
    Ddn: new FormControl(null, [Validators.required, ]),
    Password: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(30)]),
    Telephone: new FormControl(null, [Validators.required, Validators.min(10000000), Validators.max(99999999999999)]),
    Email: new FormControl(null, [Validators.required, Validators.maxLength(50), Validators.email])
  });

  private error = 'Il y a eu un probleme :(';
  private ok = 'Vous êtes bien inscrit.\n Vous allez etre redirigé vers la page de connection';
  private personneExiste = false;

  ngOnInit(): void {
  }

  ajouterPersonne(): void{
    if (this.PersonneForm.valid){
      const personne = new Personne();
      personne.id = 0;
      personne.nom = this.PersonneForm.value.Nom;
      personne.prenom = this.PersonneForm.value.Prenom;
      personne.ddn = this.PersonneForm.value.Ddn;
      personne.mdp = this.PersonneForm.value.Password;
      personne.telephone = this.PersonneForm.value.Telephone;
      personne.email = this.PersonneForm.value.Email;
      // tslint:disable-next-line:max-line-length
      // this.personneService.ajouterPersonne(personne).subscribe(reponseins => alert(this.ok), reponseins => alert(this.error));
      this.personneService.voirSiExiste(personne).subscribe((reponse: boolean) => {
        // tslint:disable-next-line:no-conditional-assignment
        if (reponse ){
          this.personneExiste = true;
        }else{
          // tslint:disable-next-line:max-line-length
          this.personneService.ajouterPersonne(personne).subscribe(reponseins => alert(this.ok), reponseins => alert(this.error));
          this.redirection();
        }
        }, reponse => alert(this.error));
    }
  }

// @ts-ignore
  redirection(): void{
    this.router.navigateByUrl('/connexion');
  }

  verifExiste(): boolean{
    return this.personneExiste;
  }

  validate(ddnd: FormControl): ValidatorFn{
    const ddn = new Date(this.PersonneForm.value.Ddn);
    const dateDay = Date.now() - ddn.getFullYear();
    const majeur = 18;
    if (dateDay <= majeur){
      return null;
    }
    return(this.PersonneForm.value.Ddn);
  }
}
