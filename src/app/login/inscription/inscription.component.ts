import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PersonneService} from '../../service/personne.service';
import {UntypedFormControl, UntypedFormGroup, ValidatorFn, Validators} from '@angular/forms';
import {ContactUser, Mdp, Personne} from '../../objet';
import {LoginService} from '../../service/login.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ActivationCompteComponent} from '../activation-compte/activation-compte.component';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  constructor(
    private router: Router,
    private personneService: PersonneService,
    private service: LoginService,
    private dialog: MatDialog
  ) { }


  PersonneForm = new UntypedFormGroup({
    Nom: new UntypedFormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
    Prenom: new UntypedFormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
    Ddn: new UntypedFormControl(Date, [Validators.required]),
    Password: new UntypedFormControl(null, [Validators.required, Validators.minLength(8)]),
    verifPassword: new UntypedFormControl(),
    // tslint:disable-next-line:max-line-length
    Telephone: new UntypedFormControl(null, [Validators.required, Validators.pattern(/^[\+]?[(]?[0-9]{3,4}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)]),
    Email: new UntypedFormControl(null, [Validators.required, Validators.maxLength(50), Validators.email])
  });

  private error = 'Il y a eu un probleme avec le serveur.\nVeuillez réessayer plus tard:(';
  private personneExiste = false;
  textError = '';
  textBool = false;
  inscriptionBool = true;
  attenteBool = false;
  dateJ = new Date();
  datePer: Date;
  isLinear = false;

  ngOnInit(): void {
  }

  comCodeActive(mdp: Mdp): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = 'auto';
    dialogConfig.height = 'auto';
    dialogConfig.data = {pass: mdp};
    this.dialog.open(ActivationCompteComponent, dialogConfig);
  }

  verifDate(): boolean{
    return (new Date().getFullYear() - (new Date(this.PersonneForm.value.Ddn).getFullYear()) >= 18);
  }

  ajouterPersonne(): void{

    this.datePer = new Date(this.PersonneForm.value.Ddn);
    const mdp1 = this.PersonneForm.value.Password;
    const mdp2 = this.PersonneForm.value.verifPassword;

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
    personne.contactUser = contactUser;
    personne.password = mdp;
    personne.verifMDP = this.PersonneForm.value.verifPassword;

    this.personneService.voirSiExiste(mdp).subscribe((reponse: boolean) => {
      if (reponse ){
        this.personneExiste = true;
      }else{
        this.attenteBool = true;
        this.inscriptionBool = false;
        // tslint:disable-next-line:max-line-length
        this.personneService.ajouterPersonne(personne).subscribe(() => {
          this.comCodeActive(mdp);
          this.redirection();
        }, () => alert(this.error));
      }
    }, () => alert(this.error));
  }

  redirection(): void{
    this.attenteBool = false;
    this.inscriptionBool = false;
  }

  verifExiste(): boolean{
    return this.personneExiste;
  }
}
