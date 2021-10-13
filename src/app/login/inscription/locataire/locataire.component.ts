import { Component, OnInit } from '@angular/core';
import {ContactUser, Mdp, Personne, Roll} from '../../../objet';
import {FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {PersonneService} from '../../../service/personne.service';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-locataire',
  templateUrl: './locataire.component.html',
  styleUrls: ['./locataire.component.css']
})
export class LocataireComponent implements OnInit {

  constructor(
    private router: Router,
    private personneService: PersonneService
  ) { }

  PersonneForm = new FormGroup({
    Nom: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(30)]),
    Prenom: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(30)]),
    Ddn: new FormControl(null, [Validators.required, ]),
    Password: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(30)]),
    verifPassword: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(30)]),
    Telephone: new FormControl(null, [Validators.required, Validators.min(10000000), Validators.max(99999999999999)]),
    Email: new FormControl(null, [Validators.required, Validators.maxLength(50), Validators.email])
  });

  private error = 'Il y a eu un probleme :(';
  private ok = 'Vous êtes bien inscrit.\n Vous allez etre redirigé vers la page de connection';
  private personneExiste = false;
  textError = '';

  ngOnInit(): void {
  }


  ajouterPersonne(): void{
    const dateJ = new Date();
    const datePer = new Date(this.PersonneForm.value.Ddn);
    const mdp1 = this.PersonneForm.value.Password;
    const mdp2 = this.PersonneForm.value.verifPassword;


    // @ts-ignore
    if (this.PersonneForm.valid && (dateJ > datePer) && ((dateJ.getFullYear() - datePer.getFullYear()) >= 18) && (mdp1 === mdp2)){

      const roll = new Roll();
      roll.id = 0;
      roll.nomRoll = 'Locataire';

      const contactUser = new ContactUser();
      contactUser.id = 0;
      contactUser.email = this.PersonneForm.value.Email;
      contactUser.telephone = this.PersonneForm.value.Telephone;

      const mdp = new Mdp();
      mdp.mdp = this.PersonneForm.value.Password;
      mdp.mail = this.PersonneForm.value.Email;

      const personne = new Personne();
      personne.id = 0;
      personne.nom = this.PersonneForm.value.Nom;
      personne.prenom = this.PersonneForm.value.Prenom;
      personne.ddn = this.PersonneForm.value.Ddn;
      personne.roll = roll;
      personne.contactUser = contactUser;
      personne.mdp = mdp;

      // this.personneService.ajouterPersonne(personne).subscribe(reponseins => alert(this.ok), reponseins => alert(this.error));
      this.personneService.voirSiExiste(mdp).subscribe((reponse: boolean) => {
        // tslint:disable-next-line:no-conditional-assignment
        if (reponse ){
          this.personneExiste = true;
        }else{
          // tslint:disable-next-line:max-line-length
          this.personneService.ajouterPersonne(personne).subscribe(reponseins => alert(this.ok), reponseins => alert(this.error));
          this.redirection();
        }
      }, reponse => alert(this.error));
    }else{
      this.textError = 'Les information entrées ne nous permetent pas d\'accepter votre inscription';
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
